import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../Button";

describe("Button", () => {
  test("calls function when clicked", () => {
    const mockOnClick = jest.fn();
    render(<Button onClick={mockOnClick}>{"Button"}</Button>);
    const buttonElement = screen.getByText("Button");
    fireEvent.click(buttonElement);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
    //?
  });
});
