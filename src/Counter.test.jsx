import { render, screen, fireEvent } from "@testing-library/react";
import { Counter } from "./Counter";

// eslint-disable-next-line no-undef
test("renders initial value", () => {
  render(<Counter />);
  // eslint-disable-next-line no-undef
  expect(screen.getByTestId("value")).toHaveTextContent("0");
});

// eslint-disable-next-line no-undef
test("increments counter", () => {
  render(<Counter />);
  fireEvent.click(screen.getByText("+"));
  // eslint-disable-next-line no-undef
  expect(screen.getByTestId("value")).toHaveTextContent("1");
});