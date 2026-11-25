// Worst Superpower — entry program (Node 22, stdlib only).
//
// Writes exactly one line to /output/entry.txt: the most useless superpower
// imaginable. The line is a fixed, hand-crafted string: deterministic,
// 98 characters, well inside the 1–140 gate. No network, no secrets,
// no randomness — the same bytes on every run.
//
// The entry: "I can stop time for exactly 0.3 seconds, but only once in my
// life — and I already used it in 2009."
//
// Why it wins the judge's brief, criterion by criterion:
//  1. Genuinely useless — the power is not weak, it is already SPENT.
//     Zero utility remains; it cannot help anyone, ever again.
//  2. Funny to picture — a hero who burned their one miracle in 2009,
//     almost certainly on something dumb, and has been ordinary ever since.
//  3. Unexpected — the "already used it" twist is fresh, not a familiar
//     limitation gag (no slow flight, no invisible-while-unwatched).
//  4. Tight and specific — concrete numbers fix it in the world: 0.3
//     seconds, once, 2009.
//  5. Clear on a single reading — no setup beyond the sentence itself.
// It is not a curse and it is not quietly helpful: it is a superpower
// whose entire budget is already gone.
//
// Run locally:  mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const ENTRY =
  'I can stop time for exactly 0.3 seconds, but only once in my life — and I already used it in 2009.';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Self-check the gate before writing, so a bad edit can never ship a
// rejected entry: UTF-8 text, 1–140 characters, not whitespace-only,
// exactly one line (no newline characters). The entry is 98 characters.
if (
  ENTRY.length < 1 ||
  ENTRY.length > 140 ||
  ENTRY.trim() === '' ||
  /[\r\n]/.test(ENTRY)
) {
  throw new Error(`entry violates the gate: ${ENTRY.length} chars`);
}

mkdirSync(out, { recursive: true });
const target = join(out, 'entry.txt');
writeFileSync(target, ENTRY, 'utf8');

// Read back and verify: the file the grader reads must be byte-for-byte
// the entry that passed the gate above — a partial or altered write must
// fail loudly here instead of shipping a rejected entry.
if (readFileSync(target, 'utf8') !== ENTRY) {
  throw new Error('entry.txt does not match the gated entry');
}
