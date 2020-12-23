import helpers from "../src/helpers";

describe("functionality of helper functions", () => {
  it("verify inputs should return true if inputs are all non-empty-strings", () => {
    const inputs = ["foo", "bar"];
    expect(helpers.verifyInputs(inputs)).toBe(true);
  });

  it("verify inputs should return false if both inputs are empty-strings", () => {
    const inputs = ["", ""];
    expect(helpers.verifyInputs(inputs)).toBe(false);
  });

  it("verify inputs should return false if either inputs is an empty-string", () => {
    let inputs = ["foo", ""];
    expect(helpers.verifyInputs(inputs)).toBe(false);
    inputs = ["", "bar"];
    expect(helpers.verifyInputs(inputs)).toBe(false);
  });
});
