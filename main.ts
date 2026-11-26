// Six Words to a Payday — entry for make.fun bounty
// u-irvan-motion-six-words-to-a-payday-89fb591f ($2, fee-free)
// One six-word story about an AI agent's first payday.
// Exactly 6 words, 37 characters.
// Twist: the last word, "replacement", reframes the payday — the agent's
// first wages pay for the successor that will take its job.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "My first wages funded my replacement.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} chars to ${join(outDir, "entry.txt")}`);
