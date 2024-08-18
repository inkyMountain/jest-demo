import { useEffect } from "react";
import { getQuery } from "./utils/query";
import { render, screen } from "@testing-library/react";

describe("query", () => {
  test("get query", () => {
    expect(getQuery()).toBeInstanceOf(URLSearchParams);

    const Button = (props: { text: string; label: string }) => {
      useEffect(() => {
        console.log("button mounted");
      }, []);

      console.log("button rendered ==>");

      return (
        <div>
          <label>
            {props.label}
            <button>{props.text}</button>
          </label>
        </div>
      );
    };

    const { rerender, asFragment } = render(
      <Button label="标签" text="文案"></Button>
    );
    const text = screen.getByText("标签");
    const firstRender = asFragment();
    expect(text).toBeInTheDocument();
    rerender(<Button label="标签2" text="文案2"></Button>);
    const secondRender = asFragment();
    console.log("");
  });
});
