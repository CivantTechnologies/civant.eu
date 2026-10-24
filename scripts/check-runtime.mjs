import { readFileSync } from "node:fs";

const minimum = readFileSync(new URL("../.nvmrc", import.meta.url), "utf8").trim();
const required = minimum.split(".").map(Number);
const actual = process.versions.node.split(".").map(Number);
const sameMajor = actual[0] === required[0];
const meetsPatchFloor =
  actual[1] > required[1] ||
  (actual[1] === required[1] && actual[2] >= required[2]);

// npm audit does not check the Node executable's own security patches.
if (!sameMajor || !meetsPatchFloor) {
  console.error(
    `Use patched Node ${minimum} or a newer Node ${required[0]}.x release. Current runtime: ${process.versions.node}. Run nvm use, or select your installed Node 24 LTS binary.`,
  );
  process.exit(1);
}

console.log(`Runtime check passed: Node ${process.versions.node}`);
