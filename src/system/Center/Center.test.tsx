import { render, screen } from "@testing-library/react";
import { Center } from ".";

describe("<Center />", () => {
  test("renders a Center component", () => {
    render(<Center data-testid="center">Sample Center</Center>);
    const element = screen.getByTestId("center");
    expect(element).toBeInTheDocument();
  });
});
