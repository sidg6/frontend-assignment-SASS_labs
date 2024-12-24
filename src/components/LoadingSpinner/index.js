import React from "react";
import "./index.css";

const LoadingSpinner = () => {
    return (
        <div
            className="loading-spinner"
            role="status"
            aria-live="polite"
            aria-busy="true"
        >
            <div className="spinner" aria-hidden="true"></div>
            <p>Loading, please wait...</p>
        </div>
    );
};

export default LoadingSpinner;
