
import { render, screen } from "@testing-library/react";
import Greet from "../../src/components/Greet";

describe("Greet", () => {
  it("it should render Hello with the name when name is provided", () => {
    const name = "John";
    render(<Greet name={name} />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(`Hello ${name}`);
  });

  it("it should render a login button", () => {
    const testId = "login-button";
    render(<Greet testId={testId} />);

    const button = screen.getByRole("button");
    const btn = screen.getByTestId(testId);

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Login");
    expect(button).toBe(btn)
  });
});
