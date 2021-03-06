import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Box } from "./box";

describe("<Box />", () => {
  test("renders a Box component", () => {
    render(<Box data-testid="box" />);
    const element = screen.getByTestId("box");
    expect(element).toBeInTheDocument();
  });
});
