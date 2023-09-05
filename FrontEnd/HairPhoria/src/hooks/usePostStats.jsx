import { useState } from 'react';
import axios from 'axios';

const usePostStats = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const addStats = async (url, data) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(url, data, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setResponse(response.data);
      console.log('Solicitud agregada exitosamente:', response.data);
    } catch (error) {
      setError(error);
      console.log('Error al agregar la solicitud:', error);
    }
  };

  return { addStats, response, error };
};

export default usePostStats;