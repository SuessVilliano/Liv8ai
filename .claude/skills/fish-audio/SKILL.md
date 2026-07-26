---
name: fish-audio
description: >-
  Integrate Fish Audio's voice AI API for text-to-speech (TTS), voice cloning,
  and speech-to-text (ASR/transcription). Use this whenever the task involves
  generating spoken audio from text, cloning or using a custom voice, adding a
  voice/read-aloud feature, or transcribing audio with Fish Audio. Triggers:
  "fish audio", "fish.audio", "text to speech", "TTS", "voice clone", "read
  aloud", "speech synthesis", "transcribe audio", "api.fish.audio".
license: Proprietary (Fish Audio) — API usage subject to https://fish.audio terms
---

# Fish Audio

Fish Audio is a voice-AI platform offering low-latency **text-to-speech (TTS)**,
**voice cloning**, and **speech-to-text (ASR)** over a single HTTPS/WebSocket
API. Its flagship models are the **S1 / S2** family (e.g. `s1`, `s1-mini`,
`s2.1-pro-free`) plus the legacy `speech-1.5` / `speech-1.6`.

## When to use this skill

Reach for Fish Audio when you need to:
- Turn text into natural, streamable speech (narration, IVR, agents, read-aloud).
- Use a **custom / cloned voice** by referencing a voice-model id.
- Transcribe audio to text (ASR) with timestamps.
- Build a real-time voice agent (streaming TTS + ASR over WebSocket).

## Golden rules

1. **The API key is a secret.** Store it in a server-side env var
   (`FISH_AUDIO_API_KEY`). NEVER ship it in browser JS, mobile apps, or a public
   repo. In a client/server app, call Fish Audio only from the backend and proxy
   the audio to the browser.
2. **Base URL:** `https://api.fish.audio`.
3. **Auth header:** `Authorization: Bearer <FISH_AUDIO_API_KEY>` on every request.
4. **Model selection is a request *header*, not a body field:** send
   `model: s1` (or another model id). Body carries the content/params.
5. **TTS responses stream binary audio** — write the raw bytes/chunks straight to
   a file or pipe them to the client; don't `JSON.parse` them.

## Quick reference

| Purpose | Method & path | Notes |
|---|---|---|
| Text-to-speech | `POST /v1/tts` | Returns streamed audio bytes |
| Speech-to-text | `POST /v1/asr` | Returns `{ text, duration, segments }` |
| List voice models | `GET /model` | Discover / manage voice ids |
| Real-time | WebSocket | Streaming TTS + ASR, sub-second turn-taking |

Content types accepted: `application/json` (default) or `application/msgpack`.

### Minimal TTS (curl)

```bash
curl https://api.fish.audio/v1/tts \
  -H "Authorization: Bearer $FISH_AUDIO_API_KEY" \
  -H "Content-Type: application/json" \
  -H "model: s1" \
  -d '{
        "text": "Hello from Fish Audio!",
        "reference_id": "YOUR_VOICE_MODEL_ID",
        "format": "mp3"
      }' \
  --output speech.mp3
```

Omit `reference_id` to use a default voice; set it to a voice-model id (your own
clone or a public one) to speak in that voice.

### Node / TypeScript (server-side)

This repo is a Node + Express app, so call Fish Audio from `server/` and never
expose the key to the client. See `examples/tts.ts` for a drop-in helper and a
suggested Express route. There is also an official `fish-audio-sdk` on npm.

### Python

```python
from fish_audio_sdk import Session, TTSRequest, ASRRequest

session = Session("FISH_AUDIO_API_KEY")

# TTS -> mp3
with open("out.mp3", "wb") as f:
    for chunk in session.tts(TTSRequest(text="Hi!", reference_id="VOICE_ID")):
        f.write(chunk)

# ASR (speech-to-text)
audio = open("in.mp3", "rb").read()
print(session.asr(ASRRequest(audio=audio, language="en")).text)
```

## Deeper detail

- Full endpoint parameters (all TTS/ASR body fields, formats, bitrates, prosody,
  latency modes) → `references/api-reference.md`.
- Ready-to-use Node/Express example → `examples/tts.ts`.

If you need something not covered here, the canonical docs live at
`https://docs.fish.audio` (and machine-readable `https://docs.fish.audio/llms.txt`).
