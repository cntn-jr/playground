#!/usr/bin/env node
const fs = require("node:fs");
const { lint } = require("./lint");

function main(argv) {
  const files = argv.slice(2);
  if (files.length === 0) {
    console.error("usage: node src/index.js <file.md> [...]");
    return 1;
  }

  let errorCount = 0;
  for (const file of files) {
    const text = fs.readFileSync(file, "utf8");
    for (const issue of lint(text)) {
      console.log(`${file}:${issue.line}  ${issue.rule}  ${issue.message}`);
      errorCount++;
    }
  }
  return errorCount > 0 ? 1 : 0;
}

if (require.main === module) {
  process.exitCode = main(process.argv);
}

module.exports = { main };
