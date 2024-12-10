import { useState } from "react";
import { evaluatePrompt } from "../services/evaluator";

const usePromptEvaluator = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [results, setResults] = useState([]);

  const evaluate = async (prompt) => {
    setLoading(true);
    setError("");
    setResults([]);

    try {
      const data = await evaluatePrompt(prompt);
      setResults(data.evaluation);
    } catch (err) {
      setError(err.message || "Something went wrong during evaluation.");
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, results, evaluate };
};

export default usePromptEvaluator;
