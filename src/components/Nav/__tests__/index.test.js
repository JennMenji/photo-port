import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Nav from "..";

afterEach(cleanup);

describe("Nav component", () => {
  // First Test: the baseline to verify that the component is rendering
  it("renders", () => {
    render(<Nav />);
  });

  // Second Test: to compare snapshot versions of the DOM node structure
  it("matches snapshot", () => {
    const { asFragment } = render(<Nav />);
    // assert value comparison
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("Emoji is visible", () => {
  it("inserts emoji into the h2", () => {
    // Arrange
    const { getByLabelText } = render(<Nav />);

    // Assert
    expect(getByLabelText("camera")).toHaveTextContent("📸");
  });
});

describe("Links are visible", () => {
  it("inserts text into the links", () => {
    //Arrange
    const { getByTestId } = render(<Nav />);

    //Assert
    expect(getByTestId("link")).toHaveTextContent("Oh Snap!");
    expect(getByTestId("about")).toHaveTextContent("About me");
  });
});
