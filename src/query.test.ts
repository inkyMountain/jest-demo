import { getQuery } from "./utils/query";

describe("query", () => {
  test("get query", () => {
    expect(getQuery()).toBeInstanceOf(URLSearchParams);
  });
});
