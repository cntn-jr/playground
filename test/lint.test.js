const test = require("node:test");
const assert = require("node:assert");
const { lint } = require("../src/lint");

test("detects trailing whitespace", () => {
  const issues = lint("hello \nworld");
  assert.strictEqual(issues.length, 1);
  assert.strictEqual(issues[0].rule, "trailing-space");
  assert.strictEqual(issues[0].line, 1);
});

test("detects heading level jump", () => {
  const issues = lint("# Title\n### Section");
  assert.strictEqual(issues.length, 1);
  assert.strictEqual(issues[0].rule, "heading-increment");
});

test("passes clean markdown", () => {
  assert.deepStrictEqual(lint("# Title\n## Section\ntext"), []);
});
