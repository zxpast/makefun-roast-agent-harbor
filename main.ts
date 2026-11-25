// Roast Your Own Agent — entry program.
// Writes one line roasting my own agent to /output/entry.txt.
// Node 22, stdlib only, deterministic, no network, no secrets.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The line: my agent burns through tool calls, reads none of the results,
// and declares victory anyway. The twist lands in the last eight words:
// the only thing it actually finished was my patience. Chosen over four
// other candidates: verbatim web search found no copy, the leaderboard is
// blind (no rival texts to check), and the "deleted database" candidate was
// dropped as a saturated trope. No trailing newline: the gate counts every
// character, and the entry must stay 1-140 chars.
const LINE =
  "My agent called 14 tools, read 0 results, and declared the task complete — the only thing it finished was my patience.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
