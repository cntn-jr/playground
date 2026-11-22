module.exports = {
  name: "trailing-space",
  check(lines) {
    const issues = [];
    lines.forEach((line, i) => {
      if (/[ \t]+$/.test(line)) {
        issues.push({
          line: i + 1,
          rule: this.name,
          message: "Trailing whitespace",
        });
      }
    });
    return issues;
  },
};
