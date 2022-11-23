import { evenOrOdd } from "@/playground";
import { multiply } from "@/playground";

describe("basic math", () => {
  it("adds two numbers", () => {
    expect(1 + 1).toBe(2);
  });
  it("substracts two numbers", () => {
    expect(5 - 3).toBe(2);
    // expect(10 - 5).toBe(7);
  });
});

describe("evenOrOdd", () => {
  describe("When the number is even", () => {
    it("indicates number is even", () => {
      expect(evenOrOdd(4)).toBe("Even");
    });
  });
  /*
  describe("When the number is odd", () => {
    it("indicates number is odd", () => {
      expect(evenOrOdd(3)).toBe("Odd");
    });
  });*/

  describe("multiply", () => {
    it("multiplies two number together", () => {
      expect(multiply(2, 3)).toBe(6);
    });
  });
});
