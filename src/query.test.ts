import { getQuery } from "./utils/query";

/**
 * @jest-environment jsdom
 * @jest-environment-options {"url": "https://jestjs.io/"}
 */

test("use jsdom and set the URL in this test file", () => {
  expect(window.location.href).toBe("https://jestjs.io/");
});

describe("query", () => {
  test("get query", () => {
    const query = getQuery();
    expect(query.id).toBe("10086");
  });

  test("get query 2", () => {
    jsdom.reconfigure({
      url: "https://baidu.com?id=10087",
    });
    const query = getQuery();
    expect(query.id).toBe("10087");
  });

  test("get query 3", () => {
    const query = getQuery();
    expect(query.id).toBe("10087");
  });
});
