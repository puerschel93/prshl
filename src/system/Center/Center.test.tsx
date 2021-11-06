import { render, screen } from "@testing-library/react";
import Center from ".";

describe("<Center />", () => {
  test("renders a Center component", () => {
    render(<Center>Sample Text</Center>);
    const linkElement = screen.getByText("Sample Text");
    expect(linkElement).toBeInTheDocument();
  });
});
