import { render, screen, fireEvent } from "@testing-library/react";
import { Counter } from "./Counter";

test("renders initial value", () => {
  render(<Counter />);
  expect(screen.getByTestId("value")).toHaveTextContent("0");
});

test("increments counter", () => {
  render(<Counter />);
  fireEvent.click(screen.getByText("+"));
  expect(screen.getByTestId("value")).toHaveTextContent("1");
});