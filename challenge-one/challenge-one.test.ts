import maskify, { extractStringPortion } from ".";

describe("test challenge one", () => {
  it("should return masked number", () => {
    expect(maskify("5234123412349876")).toBe("5xxxxxxxxxxx9876");
    expect(maskify("5234123419876")).toBe("5xxxxxxxx9876");
  });

  it("should extract number into two", () => {
    expect(extractStringPortion("Hello word", 1, 2, 4)).toMatchObject({
      endDigits: "ll",
      startDigits: "H",
    });
    expect(extractStringPortion("Hello word", 1, 2)).toMatchObject({
      endDigits: "llo word",
      startDigits: "H",
    });
  });

  it("should throw error", () => {
    expect(() => maskify("123456")).toThrowError("Wrong string");
  });
});
