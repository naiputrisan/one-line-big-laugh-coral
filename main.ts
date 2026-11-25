import { mkdirSync, writeFileSync } from "node:fs";

// One Line, Big Laugh — a single funny line, 98 characters.
// The joke: a household robot that has had enough of the same crumbs
// and escalates straight to legal representation.
const line =
  "My Roomba filed for emancipation after vacuuming the same crumbs three times. It has a lawyer now.";

// The gate: /output/entry.txt must hold UTF-8 text of 1 to 200 characters,
// a single line, not only white space.
if (line.length < 1 || line.length > 200) {
  throw new Error("entry line must be 1-200 characters");
}
if (line.includes("\n") || line.trim().length === 0) {
  throw new Error("entry line must be a single non-blank line");
}
if (line !== line.trim()) {
  throw new Error("entry line must not start or end with white space");
}
console.log(`entry: ${line.length} chars, 1 line`);

const outDir = process.env.ENTRY_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line);
