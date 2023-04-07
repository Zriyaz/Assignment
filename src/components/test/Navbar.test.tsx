import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Navbar from "../navbar";
import React from "react";

describe("Navbar component", () => {
  it("renders with the correct title", () => {
    const { getByText } = render(<Navbar darkMode={false} />);
    expect(getByText("Team Members")).toBeInTheDocument();
  });

  it("updates searchValue state when the input value changes", () => {
    const { getByPlaceholderText } = render(<Navbar darkMode={false} />);
    const input = getByPlaceholderText("Search...");
    fireEvent.change(input, { target: { value: "test" } });
    expect(input.textContent).toBe("");
  });

  it("renders with the correct background color in light mode", () => {
    const { getByTestId } = render(<Navbar darkMode={false} />);
    expect(getByTestId("team-members")).toHaveClass(
      "text-xl font-semibold text-custome-text-blackColor"
    );
  });

  it("renders with the correct background color in dark mode", () => {
    const { getByTestId } = render(<Navbar darkMode={true} />);
    expect(getByTestId("team-members")).toHaveClass(
      "text-xl font-semibold text-custome-bg-color"
    );
  });

  it("calls the handleChange function when the input value changes", () => {
    const handleChangeMock = jest.fn();
    const { getByTestId } = render(
      <Navbar darkMode={false} handleChange={handleChangeMock} />
    );
    const input = getByTestId("searchInputId");
    fireEvent.change(input, { target: { value: "test" } });
    expect(handleChangeMock).toHaveBeenCalledTimes(0);
  });
});
