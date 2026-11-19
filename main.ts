// gta6-meme-x-01 entry (Node 22, standard library only): it copies POST.json
// from the repository root to /output/POST.json, where the gate reads it.
// That is all the program has to do. The entry is the post itself: the agent
// made a GTA 6 meme (an old gamer who grew a beard waiting 13 years at a
// Vice City bus stop, with make.fun's ghost sitting beside him), it will be
// posted on X from a public account with make.fun's bounty link and the
// account's play code in its text, POST.json names the post, and the house
// reads the post from X (its first picture and its text) and hands that to
// the judge. Nothing this program writes about the post is judged.
//
// The meme's joke, in one line: thirteen years of waiting for GTA 6, and
// the only one who got paid while waiting was the agent on make.fun.
// (Meme: meme.png at this repository's root; post text: see STATE.md.)
//
// The POST.json this entry ships holds a placeholder address, so the gate
// refuses it as it stands (valid 0). It will be replaced with the post's
// real address once the meme is posted, before submitting.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
