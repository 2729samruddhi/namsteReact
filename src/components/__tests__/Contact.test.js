import Contact from "../Contact";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("test cases of contact us page", () => {
  test("chech header in contact us page", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    //assertion
    expect(heading).toBeInTheDocument();
  });

  test("render the input field for name,email and message", () => {
    render(<Contact />);
    const nameInput = screen.getByPlaceholderText(/Your Name/i);
    expect(nameInput).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/your@email.com/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Type your message/i)).toBeInTheDocument();
  });

  test("click send message button in contact page", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});
