import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Contact from "../";

afterEach(cleanup);

describe("Contact Component renders", () => {
  it("renders", () => {
    render(<Contact></Contact>);
  });

  it("renders", () => {
    const { asFragment } = render(<Contact></Contact>);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("Text Content matches", () => {
  it("renders", () => {
    const { getByTestId } = render(<Contact></Contact>);
    expect(getByTestId("h1tag")).toHaveTextContent("Contact Me");
  });

  it("renders", () => {
    const { getByTestId } = render(<Contact></Contact>);
    expect(getByTestId("button")).toHaveTextContent("Submit");
  });
});
