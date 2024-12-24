import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Pagination from "../components/Pagination";

describe("Pagination Component", () => {
    const mockOnPageChange = jest.fn();

    test("renders the pagination component", () => {
        render(
            <Pagination
                totalRecords={10}
                recordsPerPage={5}
                currentPage={1}
                onPageChange={mockOnPageChange}
            />
        );

        const prevButton = screen.getByRole("button", { name: /previous/i });
        const nextButton = screen.getByRole("button", { name: /next/i });
        const pageInfo = screen.getByText(/page 1 of 2/i);

        expect(prevButton).toBeInTheDocument();
        expect(nextButton).toBeInTheDocument();
        expect(pageInfo).toBeInTheDocument();
    });

    test("disables 'Previous' button on the first page", () => {
        render(
            <Pagination
                totalRecords={10}
                recordsPerPage={5}
                currentPage={1}
                onPageChange={mockOnPageChange}
            />
        );

        const prevButton = screen.getByRole("button", { name: /previous/i });
        expect(prevButton).toBeDisabled();
    });

    test("disables 'Next' button on the last page", () => {
        render(
            <Pagination
                totalRecords={10}
                recordsPerPage={5}
                currentPage={2}
                onPageChange={mockOnPageChange}
            />
        );

        const nextButton = screen.getByRole("button", { name: /next/i });
        expect(nextButton).toBeDisabled();
    });

    test("calls onPageChange when 'Next' button is clicked", () => {
        render(
            <Pagination
                totalRecords={10}
                recordsPerPage={5}
                currentPage={1}
                onPageChange={mockOnPageChange}
            />
        );

        const nextButton = screen.getByRole("button", { name: /next/i });
        fireEvent.click(nextButton);

        expect(mockOnPageChange).toHaveBeenCalledWith(2);
    });

    test("calls onPageChange when 'Previous' button is clicked", () => {
        render(
            <Pagination
                totalRecords={10}
                recordsPerPage={5}
                currentPage={2}
                onPageChange={mockOnPageChange}
            />
        );

        const prevButton = screen.getByRole("button", { name: /previous/i });
        fireEvent.click(prevButton);

        expect(mockOnPageChange).toHaveBeenCalledWith(1);
    });
});
