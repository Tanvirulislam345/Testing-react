const { sum, sub } = require("../coverage/basic");
const expect = require("chai").expect;

describe("suite 1", () => {
  afterEach(() => {
    console.log("afterEach");
  });
  beforeEach(() => {
    console.log("beforeEach");
  });
  after(() => {
    console.log("after");
  });
  before(() => {
    console.log("before");
  });

  it("add(2, 3) should return 5", () => {
    // expect(sum(2, 3)).to.be.equal(5);
    console.log("it");
  });

  it("two", () => {
    console.log("it two");
  });
});
