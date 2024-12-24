import React from "react";
import "./index.css";

const Table = ({ data }) => {
    return (
        <table className="projects-table" role="table" aria-label="Project details table">
            <thead>
                <tr>
                    <th scope="col">S.No.</th>
                    <th scope="col">Percentage Funded</th>
                    <th scope="col">Amount Pledged</th>
                </tr>
            </thead>
            <tbody>
                {data.length === 0 ? (
                    <tr>
                        <td colSpan="3">No records available</td>
                    </tr>
                ) : (
                    data.map((row) => (
                        <tr key={row.id}>
                            <td>{row.id}</td>
                            <td>{row.percentageFunded}%</td>
                            <td>${row.amountPledged.toLocaleString()}</td>
                        </tr>
                    ))
                )}
            </tbody>
        </table>
    );
};

export default Table;
