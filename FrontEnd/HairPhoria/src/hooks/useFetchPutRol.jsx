import { useState } from 'react';

const useFetchPutRol = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateRol = async (id, email, newRol) => {
    setIsLoading(true);
    setError(null);

    try {
      const token = localStorage.getItem('token');
      const body = { rol: newRol, email };
      console.log('Usuario a actualizar:', body);
      const response = await fetch(`http://3.19.243.36:8080/clientes/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error('Error al actualizar el rol.');
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, error, updateRol };
};

export default useFetchPutRol;
