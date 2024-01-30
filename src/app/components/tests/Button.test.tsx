import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Button } from "../Button"; // Adjust the import path based on your file structure

describe("Button", () => {
  test("applies MuiButton-colorPrimary class when primary is true", () => {
    render(<Button primary>{"Primary Button"}</Button>);
    const buttonElement = screen.getByText("Primary Button");
    expect(buttonElement).not.toHaveClass("MuiButton-colorNeutral");
    expect(buttonElement).toHaveClass("MuiButton-colorPrimary");
  });

  test("applies MuiButton-colorNeutral class when primary is not true", () => {
    render(<Button>{"Default Button"}</Button>);
    const buttonElement = screen.getByText("Default Button");
    expect(buttonElement).not.toHaveClass("MuiButton-colorPrimary");
    expect(buttonElement).toHaveClass("MuiButton-colorNeutral");
  });
});
