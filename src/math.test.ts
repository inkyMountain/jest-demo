// import { sum } from "@/utils/math";
import { sum } from "@utils/math";

describe("math", () => {
  it("support sum", () => {
    expect(sum(1, 2)).toBe(3);
  });
  it("support sum too", () => {
    expect(sum(1, 3)).toBe(4);
  });
});
