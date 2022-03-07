import { render, screen } from "@testing-library/react";
import { Link } from ".";

describe("<Link />", () => {
  test("renders a Link component", () => {
    render(<Link data-testid="link" />);
    const element = screen.getByTestId("link");
    expect(element).toBeInTheDocument();
  });
});
