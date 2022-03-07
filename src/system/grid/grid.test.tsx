import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Grid } from "./grid";

describe("<Grid />", () => {
  test("renders a Grid component", () => {
    render(<Grid data-testid="grid" />);
    const element = screen.getByTestId("grid");
    expect(element).toBeInTheDocument();
  });
});
