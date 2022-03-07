import { render, screen } from "@testing-library/react";
import { Text } from ".";

describe("<Text />", () => {
  test("renders a Text component", () => {
    render(<Text>Sample Text</Text>);
    const element = screen.getByText("Sample Text");
    expect(element).toBeInTheDocument();
  });
});
