const { sum, sub } = require("../coverage/basic");
const expect = require("chai").expect;

// BDD behaviour driven development
describe("suite 1", () => {
  it("add(2, 3) should return 5", () => {
    expect(sum(2, 3)).to.be.equal(5);
  });

  it("sub(5, 3) should return 2", () => {
    expect(sub(5, 3)).to.be.equal(2);
  });
});

// TDD text driven development
// const { suite, test } = require("mocha");
// suite("suite 2", () => {
//   test("add(2, 3) should return 5", () => {
//     expect(sum(2, 3)).to.be.equal(5);
//   });

//   test("sub(5, 3) should return 2", () => {
//     expect(sub(5, 3)).to.be.equal(2);
//   });
// });
