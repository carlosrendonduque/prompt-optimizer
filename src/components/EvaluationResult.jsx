import React from "react";

const EvaluationResult = ({ results }) => {
  if (!results || results.length === 0) {
    return <p>No evaluation results to display.</p>;
  }

  return (
    <div style={styles.container}>
      <h2>Prompt Evaluation</h2>
      <ul style={styles.list}>
        {results.map((result, index) => (
          <li key={index} style={styles.listItem}>
            <strong>{result.criterion}:</strong> {result.score}
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    padding: "1rem",
    margin: "1rem auto",
    border: "1px solid #ccc",
    borderRadius: "8px",
    maxWidth: "500px",
    backgroundColor: "#f9f9f9",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  listItem: {
    marginBottom: "0.5rem",
    fontSize: "1rem",
  },
};

export default EvaluationResult;
