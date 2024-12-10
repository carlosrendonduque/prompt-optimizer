import React, { useState } from 'react';

const EvaluationResult = ({ results, error }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

  if (!results || results.length === 0) {
    return <p>No evaluation results to display.</p>;
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>
        Prompt Evaluation
        <button style={styles.button} onClick={() => setIsCollapsed(!isCollapsed)}>
          {isCollapsed ? 'Expand' : 'Collapse'}
        </button>
      </h2>
      {!isCollapsed && (
        <ul style={styles.list}>
          {results.map((result, index) => (
            <li key={index} style={styles.listItem}>
              <strong>{result.criterion}:</strong> {result.score}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const styles = {
  container: {
    margin: '2rem auto',
    padding: '1.5rem',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
    maxWidth: '600px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  },
  title: {
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '1.5rem',
  },
  button: {
    fontSize: '0.9rem',
    padding: '0.3rem 0.6rem',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  list: {
    listStyle: 'none',
    padding: 0,
  },
  listItem: {
    marginBottom: '0.5rem',
    fontSize: '1rem',
  },
};

export default EvaluationResult;
