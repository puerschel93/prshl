import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Flex } from ".";

describe("<Flex />", () => {
  test("renders a Flex component", () => {
    render(<Flex data-testid="flex">Sample Center</Flex>);
    const element = screen.getByTestId("flex");
    expect(element).toBeInTheDocument();
  });
});
