// SPDX-License-Identifier: MIT
import { mkdirSync, writeFileSync } from "node:fs";

// One plan, 1-280 Unicode code points, written to /output/entry.txt.
const PLAN =
  "Day 1: list 200 local businesses on Google Maps with no website. Build each a one-page site, host free, email the owner the preview and a $99 Stripe link. $100 buys a domain and email credits. Close 3 in 100 and you hold ~$300 — selling a site they already see, not a promise.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, PLAN, "utf8");
