import numberToOrdinal from ".";

describe("test challenge one", () => {
  it("should convert to ordinal number", () => {
    expect(numberToOrdinal(0)).toBe("0");
    expect(numberToOrdinal(1)).toBe("1st");
    expect(numberToOrdinal(2)).toBe("2nd");
    expect(numberToOrdinal(3)).toBe("3rd");
    expect(numberToOrdinal(10)).toBe("10th");
    expect(numberToOrdinal(12)).toBe("12th");
    expect(numberToOrdinal(21)).toBe("21st");
    expect(numberToOrdinal(22)).toBe("22nd");
    expect(numberToOrdinal(111)).toBe("111th");
    expect(numberToOrdinal(121)).toBe("121st");
  });
});
