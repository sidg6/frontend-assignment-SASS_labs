import React from "react";
import { render, screen } from "@testing-library/react";
import Table from "../components/Table";

const mockData = [
    { id: 1, percentageFunded: 120, amountPledged: 10000 },
    { id: 2, percentageFunded: 85, amountPledged: 7500 },
];

describe("Table Component", () => {
    test("renders table with correct headers", () => {
        render(<Table data={mockData} />);

        const headers = screen.getAllByRole("columnheader");
        expect(headers).toHaveLength(3);
        expect(headers[0]).toHaveTextContent("S.No.");
        expect(headers[1]).toHaveTextContent("Percentage Funded");
        expect(headers[2]).toHaveTextContent("Amount Pledged");
    });

    test("renders table rows correctly", () => {
        render(<Table data={mockData} />);
        const rows = screen.getAllByRole("row");
        expect(rows).toHaveLength(mockData.length + 1);

        expect(screen.getByText("1")).toBeInTheDocument();
        expect(screen.getByText("120%")).toBeInTheDocument();
        expect(screen.getByText("$10,000")).toBeInTheDocument();

        expect(screen.getByText("2")).toBeInTheDocument();
        expect(screen.getByText("85%")).toBeInTheDocument();
        expect(screen.getByText("$7,500")).toBeInTheDocument();
    });
});
