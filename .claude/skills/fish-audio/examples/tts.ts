/**
 * Fish Audio TTS helper + Express route (server-side only).
 *
 * The API key MUST stay on the server. Set FISH_AUDIO_API_KEY in your
 * environment (e.g. Vercel/Replit secrets) — never expose it to the client.
 *
 * Uses the raw REST API (no SDK dependency). Node 18+ has global fetch.
 */

import type { Express, Request, Response } from 'express';

const FISH_AUDIO_URL = 'https://api.fish.audio/v1/tts';

export interface TTSOptions {
  text: string;
  /** Voice-model id to speak in. Omit for the default voice. */
  referenceId?: string;
  /** Output format. Defaults to mp3. */
  format?: 'mp3' | 'wav' | 'pcm' | 'opus';
  /** Model id sent as the `model` header. Defaults to s1. */
  model?: string;
  /** normal = higher quality, balanced = lower latency. */
  latency?: 'normal' | 'balanced';
}

/**
 * Synthesize speech and return the audio as a Buffer.
 * Throws on non-2xx responses.
 */
export async function fishAudioTTS(opts: TTSOptions): Promise<Buffer> {
  const apiKey = process.env.FISH_AUDIO_API_KEY;
  if (!apiKey) throw new Error('FISH_AUDIO_API_KEY is not set');

  const res = await fetch(FISH_AUDIO_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
      model: opts.model ?? 's1',
    },
    body: JSON.stringify({
      text: opts.text,
      reference_id: opts.referenceId,
      format: opts.format ?? 'mp3',
      latency: opts.latency ?? 'normal',
      normalize: true,
    }),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => '');
    throw new Error(`Fish Audio TTS failed: ${res.status} ${detail}`);
  }

  const arrayBuf = await res.arrayBuffer();
  return Buffer.from(arrayBuf);
}

/**
 * Register a POST /api/tts route that proxies Fish Audio, keeping the key
 * server-side. Body: { text, referenceId?, format? }.
 *
 * Wire it up in server/routes.ts:  registerTTSRoute(app);
 */
export function registerTTSRoute(app: Express) {
  app.post('/api/tts', async (req: Request, res: Response) => {
    try {
      const { text, referenceId, format } = req.body ?? {};
      if (!text || typeof text !== 'string') {
        return res.status(400).json({ error: 'text is required' });
      }

      const audio = await fishAudioTTS({ text, referenceId, format });
      const contentType =
        format === 'wav' ? 'audio/wav' : format === 'opus' ? 'audio/opus' : 'audio/mpeg';

      res.setHeader('Content-Type', contentType);
      res.send(audio);
    } catch (err) {
      console.error('TTS error:', err);
      res.status(500).json({ error: 'Failed to synthesize speech' });
    }
  });
}
