import React, { useEffect, useState } from "react";
import Table from "./components/Table";
import Pagination from "./components/Pagination";
import LoadingSpinner from "./components/LoadingSpinner";
import "./index.css";

const App = () => {
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState(null);
  const [isLoading, updateIsLoading] = useState(true)
  const recordsPerPage = 5;
  let apiCalled = false;

  useEffect(() => {
    const fetchProjects = async () => {
      apiCalled = true;
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json"
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        const transformedData = data.map((project, index) => ({
          id: index + 1,
          percentageFunded: project['percentage.funded'],
          amountPledged: project["amt.pledged"],
        }));

        setProjects(transformedData);
      } catch (err) {
        setError("Failed to fetch project data. Please try again later.");
      }
      updateIsLoading(false)

    };
    if (!apiCalled) {
      fetchProjects();
    }

  }, []);

  const startIndex = (currentPage - 1) * recordsPerPage;
  const currentRecords = projects.slice(startIndex, startIndex + recordsPerPage);

  return (
    <div className="app-container">
      <h1>Kickstarter Projects</h1>
      {error && <p role="alert" className="error">{error}</p>}
      {isLoading ? <LoadingSpinner /> : (
        <>
          <Table data={currentRecords} />
          <Pagination
            totalRecords={projects.length}
            recordsPerPage={recordsPerPage}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </>
      )}
    </div>
  );
};

export default App;
