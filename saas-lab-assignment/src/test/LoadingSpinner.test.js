import React from "react";
import { render, screen } from "@testing-library/react";
import LoadingSpinner from "../components/LoadingSpinner";

describe("LoadingSpinner Component", () => {
  test("renders the spinner correctly", () => {
    render(<LoadingSpinner />);
    const spinnerElement = screen.getByRole("status");
    const loadingText = screen.getByText(/loading, please wait/i);

    expect(spinnerElement).toBeInTheDocument();
    expect(loadingText).toBeInTheDocument();
  });

  test("spinner has aria attributes for accessibility", () => {
    render(<LoadingSpinner />);
    const spinnerElement = screen.getByRole("status");

    expect(spinnerElement).toHaveAttribute("aria-live", "polite");
    expect(spinnerElement).toHaveAttribute("aria-busy", "true");
  });
});
