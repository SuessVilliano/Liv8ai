# Fish Audio API — Reference

Base URL: `https://api.fish.audio`
Auth: `Authorization: Bearer <FISH_AUDIO_API_KEY>` (required on every request)
Model: passed as an HTTP **header** `model: <model-id>` (not in the body).

Common model ids: `s1`, `s1-mini`, `s2.1-pro-free`, `speech-1.6`, `speech-1.5`.
`s1` is a good default. Use the free `s2.1-pro-free` for zero-cost testing.

Request `Content-Type` may be `application/json` (default) or
`application/msgpack`. Use msgpack when passing raw reference audio bytes for
voice cloning to avoid base64 overhead.

---

## POST /v1/tts — Text to Speech

Returns a **stream of binary audio** (write bytes directly; do not JSON-parse).

### Body fields

| Field | Type | Default | Meaning |
|---|---|---|---|
| `text` | string | — (required) | Text to synthesize. |
| `reference_id` | string | null | Voice-model id to speak in (your clone or a public voice). Omit for the default voice. |
| `references` | array | [] | Inline voice-clone references: `[{ audio: <bytes>, text: "transcript of the audio" }]`. Use instead of `reference_id` for one-off cloning. |
| `format` | string | `mp3` | Output container: `mp3`, `wav`, `pcm`, or `opus`. |
| `mp3_bitrate` | int | 128 | For mp3: 64 / 128 / 192. |
| `opus_bitrate` | int | — | For opus output. |
| `sample_rate` | int | model default | Output sample rate (Hz). |
| `chunk_length` | int | 200 | Text chunk size for streaming (100–300). |
| `normalize` | bool | true | Normalize text (numbers, dates, etc.). Turn off for fine control. |
| `latency` | string | `normal` | `normal` (higher quality) or `balanced` (lower latency). |
| `prosody` | object | — | `{ "speed": 1.0, "volume": 0 }` — speaking rate & volume offset. |
| `temperature` | float | 0.7 | Sampling temperature. |
| `top_p` | float | 0.7 | Nucleus sampling. |

### Example (JSON)

```jsonc
POST /v1/tts
Authorization: Bearer <KEY>
Content-Type: application/json
model: s1

{
  "text": "The quick brown fox.",
  "reference_id": "VOICE_MODEL_ID",
  "format": "mp3",
  "mp3_bitrate": 128,
  "chunk_length": 200,
  "normalize": true,
  "latency": "normal",
  "prosody": { "speed": 1.0, "volume": 0 }
}
```

---

## POST /v1/asr — Speech to Text (transcription)

### Body fields

| Field | Type | Default | Meaning |
|---|---|---|---|
| `audio` | bytes | — (required) | Raw audio to transcribe (send via msgpack, or base64 in JSON). |
| `language` | string | auto | ISO code hint, e.g. `en`, `zh`, `ja`. |
| `ignore_timestamps` | bool | false | Skip per-segment timestamps for speed. |

### Response

```jsonc
{
  "text": "full transcription",
  "duration": 12345,          // milliseconds
  "segments": [
    { "text": "...", "start": 0.0, "end": 2.1 }
  ]
}
```

---

## GET /model — Voice models

List / discover voice-model ids you can pass as `reference_id`. Also used to
manage voices you have created (cloned). Public marketplace voices and your own
private clones both expose an id usable in `/v1/tts`.

To **create a clone**, upload reference audio + its transcript (via the Fish
Audio dashboard at `https://fish.audio` or the models API); you receive a voice
`id` to reference thereafter.

---

## Real-time (WebSocket)

Fish Audio supports streaming TTS and streaming ASR over WebSocket for
sub-second turn-taking in voice agents. Open a socket, stream text in and receive
audio chunks out (TTS), or stream audio in and receive partial transcripts (ASR).
See the WebSocket section of `https://docs.fish.audio` for the exact frame
protocol; the official `fish-audio-sdk` (Python) and `fish-audio-sdk` (npm) wrap
it.

---

## SDKs

- Python: `pip install fish-audio-sdk` → `Session`, `TTSRequest`, `ASRRequest`,
  `ReferenceAudio`, `Prosody`.
- TypeScript/Node: `npm i fish-audio-sdk` (also a `fish-audio` package).

---

## Error handling & limits

- `401` — missing/invalid `Authorization` bearer token.
- `402` / quota errors — out of credits; check the account dashboard.
- `422` — malformed body (e.g. missing `text`, bad `format`).
- TTS is billed by characters/usage; keep `chunk_length` reasonable and prefer
  `latency: balanced` for interactive use, `normal` for pre-rendered assets.

## Security checklist

- Keep `FISH_AUDIO_API_KEY` server-side only (env var / secret manager).
- Never commit the key; never return it to the browser.
- Proxy audio through your backend so the client never sees the key.
