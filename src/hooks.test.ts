import { renderHook } from "@testing-library/react";
import { act, useRef, useState } from "react";

describe("hooks", () => {
  test("useCounter", async () => {
    const { result, rerender } = renderHook(useCounter, {
      initialProps: {
        initValue: 0,
      },
    });
    expect(result.current.count).toBe(0);
    await act(async () => {
      result.current.increment();
    });
    expect(result.current.count).toBe(1);
    rerender({
      initValue: 10086,
    });
    expect(result.current.count).toBe(1);
    await act(async () => {
      result.current.set(10086);
    });
    expect(result.current.count).toBe(10086);
  });
});

function useCounter(options?: { initValue?: number }) {
  const DEFAULT_INIT_VALUE = 0;
  const initValue = useRef<number>(options?.initValue ?? DEFAULT_INIT_VALUE);
  const [count, setCount] = useState(initValue.current);
  return {
    increment() {
      setCount(count + 1);
    },
    decrement() {
      setCount(count - 1);
    },
    set(count: number) {
      setCount(count);
    },
    reset() {
      setCount(initValue.current);
    },
    count,
  };
}
