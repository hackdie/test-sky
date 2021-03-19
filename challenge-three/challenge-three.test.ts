import calculate from ".";

describe("test challenge one", () => {
  it("should calculate number", () => {
    expect(calculate("3")).toBe(3);
    expect(calculate("3 4 +")).toBe(7);
    expect(calculate("2 9 5 + -")).toBe(12);
    expect(calculate("5 10 2 * /")).toBe(4);
    expect(calculate("0 1 0 / *")).toBe(0);
  });

  it("should throw an error", () => {
    expect(() => calculate("")).toThrowError();
    expect(() => calculate("-")).toThrowError();
    expect(() => calculate("1 2 &")).toThrowError();
    expect(() => calculate("1 2       &")).toThrowError();
  });
});
