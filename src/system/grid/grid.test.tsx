import { render, screen } from "@testing-library/react";
import { Grid } from ".";

describe("<Grid />", () => {
  test("renders a Grid component", () => {
    render(<Grid data-testid="grid" />);
    const element = screen.getByTestId("grid");
    expect(element).toBeInTheDocument();
  });
});
