import { useState } from 'react';

const useHttp = (requestConfig, applayData) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : 'GET',
        headers: requestConfig.headers ? requestConfig.headers : '',
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : '',
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      const data = response.json;

      applayData(data);
    } catch (err) {
      setError(err.message || 'Something went wrong!');
    }
    setIsLoading(false);
  };
  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;
