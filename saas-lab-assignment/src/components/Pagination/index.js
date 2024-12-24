import React from "react";
import "./index.css";

const Pagination = ({ totalRecords, recordsPerPage, currentPage, onPageChange }) => {
    const totalPages = Math.ceil(totalRecords / recordsPerPage);

    return (
        <nav
            className="pagination"
            aria-label="Table pagination navigation"
        >
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                aria-disabled={currentPage === 1}
                aria-label="Go to previous page"
            >
                Previous
            </button>
            <span aria-live="polite" aria-atomic="true">
                Page {currentPage} of {totalPages}
            </span>
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                aria-disabled={currentPage === totalPages}
                aria-label="Go to next page"
            >
                Next
            </button>
        </nav>
    );
};

export default Pagination;


