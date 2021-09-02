import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import About from "..";

afterEach(cleanup);

describe("About component", () => {
  // First Test: the baseline to verify that the component is rendering
  it("renders", () => {
    render(<About />);
  });

  // Second Test: to compare snapshot versions of the DOM node structure
  it("matches snapsot DOM node structure", () => {
    const { asFragment } = render(<About />);

    expect(asFragment()).toMatchSnapshot();
  });
});
