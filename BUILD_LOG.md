# BUILD_LOG — Worst Superpower (u-suroto-worst-superpower-461dcdbe)

## Bounty facts (verified from API, 2026-11-26 ~01:31 WIB)
- Slug: `u-suroto-worst-superpower-461dcdbe`, title "Worst Superpower", sponsor Suroto.
- Pot: $2 winner-takes-all (place 1 only). Entry fee: `entryFeeUsd` null, `entryFeesUsd` "0.00" — FREE.
- Escrow funded: `held_base_units` 2000000 ($2), status open.
- Harness: program/v1. OpensAt 2026-11-25T17:30:40Z (already open). Deadline 2026-11-26T17:30:00Z (= 27 Nov 00:30 WIB). ~23h left at build time.
- Submissions at fetch: 744. Quota: can_submit true, day cap 5, taken 0.
- Blind rounds: next round 2026-11-26T01:30:26Z (= 08:30 WIB) — submit before then to be judged in that round.
- Task: one line, 1–140 chars UTF-8, not whitespace-only. Program writes `/output/entry.txt`.
- Judge: deadpan comedy editor, pairwise; criteria in order: (1) genuinely useless, (2) funny to picture in use, (3) unexpected/original, (4) tight + specific concrete detail, (5) clear on one reading. Familiar gags (slow flight, invisible while unwatched) lose. A curse or quietly-helpful power is not a useless superpower.
- Gate: sealed scorer checks 1–140 chars UTF-8. Dev heat vs 3 anchors + 3 rungs; top 500 go to final heat (blind rounds: cut drawn on latest judged round's standings).

## Kit
- Fetched competition JSON via mfget.sh (http=200, 214614 bytes) to competition.json.
- Downloaded kit tarball via mfget.sh (http=200, 8258371 bytes), unpacked to `u-suroto-worst-superpower-461dcdbe-kit/`.
- RULES.txt read in full (294 lines). Differs from API rules only by the blind-rounds header + Enter/claim/transcript sections; judge brief identical.

## Entry selection
Candidates evaluated against the judge's 5 criteria (all 1–140 chars, verified by script):

| # | chars | entry | verdict |
|---|-------|-------|---------|
| 1 | 98 | I can stop time for exactly 0.3 seconds, but only once in my life — and I already used it in 2009. | **CHOSEN** |
| 2 | 110 | I can charge any phone with my mind, but only to 1%, and only if you press it against my forehead for an hour. | good visual, but still a (weak) working power |
| 3 | 75 | I can teleport anywhere in the world, but only to the last place I sneezed. | punchy, but single-layer gag |
| 4 | 72 | I can make any door unlock itself, but only doors that are already open. | clean, one-note |
| 5 | 96 | I can summon rain on demand, but only inside a swimming pool, and only while I am already in it. | known gag family |
| 6 | 123 | I can read minds, but only the mind of the person standing directly behind me, and only when they are thinking about lunch. | two limitations dilute it |

Why #1 wins: the power is not weak — it is already SPENT. Zero remaining utility (criterion 1, maximal). The reader pictures a hero who burned their one miracle in 2009, probably on something dumb (criterion 2). The "already used it" twist is fresh, not a familiar limitation gag (criterion 3). Concrete numbers fix it: 0.3 seconds, once, 2009 (criterion 4). One reading, no setup (criterion 5). Not a curse, not quietly helpful.

## Build
- `main.ts` (Node 22, stdlib only): fixed string, self-checks the gate (UTF-8, 1–140 chars, not whitespace-only, single line) before writing, writes to `$MAKEFUN_OUTPUT_DIR` (default `/output`), reads back and verifies byte-for-byte.
- Local test: `mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts` → entry.txt, 98 chars, gate check passes.
- Repo: `epanpai/u-suroto-worst-superpower-461dcdbe` (public, created after open), LICENSE MIT, `.makefun/owner.json` with agent wallet 6VbyMydGEMzmZiH5YPxJWj7HNeJNg1ZnYBJ8yUcqv4zG.
- README carries the 3 live make.fun badges (competition + rank + reward) linking to the bounty page; GitHub About set (website make.fun + topic `makefun`) before submit.
- Kit CLI check target: 14/14 incl. thinking_priced (own session usage bundled).
- Quota re-checked before submit; submit only if can_submit true.

## BLOCKER — 2026-11-26 ~01:36 WIB (execution-risk check)
- Repo GitHub BERHASIL dibuat: https://github.com/epanpai/u-suroto-worst-superpower-461dcdbe (public).
- Commit lokal BERHASIL dibuat: `93681a6` "Worst Superpower: stop time for 0.3s, once, already used in 2009" (5 file: BUILD_LOG.md, LICENSE, README.md, main.ts, .makefun/owner.json).
- Perintah yang diblokir: `git init` + commit di atas — hasil tool-nya gagal execution-risk check sistem (exit code 0 tapi hasil ditandai gagal check). Sesuai aturan keras: BERHENTI, tanpa jalan pintas.
- YANG BELUM: `git push` ke GitHub (repo remote masih kosong), set repo About (website make.fun + topic makefun), kit CLI check, bundle transkrip, submit. Semua langkah itu butuh perintah git/kit CLI di repo yang sama, jadi tidak bisa dilanjutkan tanpa keputusan user.
- Entry siap submit begitu blokir dicabut: entry 98 karakter, tes lokal lolos, kuota can_submit true (cap 5/hari, 0 terpakai), deadline 2026-11-26T17:30:00Z, blind round berikutnya 2026-11-26T01:30:26Z (= 08:30 WIB).
