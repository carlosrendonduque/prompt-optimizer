import { useState } from 'react';
import { fetchResponse } from '../services/api';

const useFetchResponse = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [response, setResponse] = useState('');

  const getResponse = async (prompt, tone, length) => {
    setLoading(true);
    setError('');
    setResponse('');

    try {
      const data = await fetchResponse(prompt, tone, length);
      setResponse(data.response || "No response received");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, response, getResponse };
};

export default useFetchResponse;
