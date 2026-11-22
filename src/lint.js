const trailingSpace = require("./rules/trailing-space");
const headingIncrement = require("./rules/heading-increment");

const rules = [trailingSpace, headingIncrement];

function lint(text) {
  const lines = text.split(/\r?\n/);
  return rules.flatMap((rule) => rule.check(lines));
}

module.exports = { lint, rules };
