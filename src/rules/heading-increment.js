module.exports = {
  name: "heading-increment",
  check(lines) {
    const issues = [];
    let prevLevel = 0;
    lines.forEach((line, i) => {
      const match = /^(#{1,6})\s/.exec(line);
      if (!match) return;
      const level = match[1].length;
      if (prevLevel > 0 && level > prevLevel + 1) {
        issues.push({
          line: i + 1,
          rule: this.name,
          message: `Heading level jumped from ${prevLevel} to ${level}`,
        });
      }
      prevLevel = level;
    });
    return issues;
  },
};
