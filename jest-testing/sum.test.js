const { sum } = require("./sum");

test("adds 3 + 2 to equal 3", () => {
  expect(sum(3, 2)).toBe(5);
});
