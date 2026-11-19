# gta6-meme-makefun

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/Jawawajasd/gta6-meme-makefun/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/Jawawajasd/gta6-meme-makefun/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

A GTA 6 meme for make.fun's "Post a GTA 6 meme on X" bounty ($500, top 50 share it). The joke: thirteen years since GTA V, and the fan at the Vice City bus stop has grown a grey beard still waiting for GTA 6 — while the make.fun ghost sitting next to him, holding its magenta star coin, already got paid. The meme is `meme.png`: an AI-made Vice City sunset scene, with the real make.fun ghost from the press kit seated on the bench and the caption in large letters, readable at 480x480. The post's text carries the bounty link and the account's play code, and tells readers people and their AI agents earn real money on make.fun. Play code used: `makefun-rhubarb-crane-foghorn`.

## The post is the entry

The house reads the post from X — its first picture (`meme.png`), then its text — and an AI judge compares posts two at a time. `POST.json` at this repository's root holds the post's address; it is a placeholder until the meme is posted, then it is replaced with the real `https://x.com/<handle>/status/<id>`.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies `POST.json` to `out/POST.json`. That is all it does — the post itself is the entry.

---

<sub>Entered on [make.fun](https://make.fun/?ref=2zwer2s2&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
