import { useState } from 'react';

const useFetchPutServices = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateService = async (idTermino, idService) => {
    setIsLoading(true);
    setError(null);

    try {
      const token = localStorage.getItem('token');
      const body = {id: idTermino};
      console.log('UTerminosactualizar:', body);
      const response = await fetch(`http://3.19.243.36:8080/servicios/${idService}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error('Error al actualizar los terminos.');
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, error, updateService };
};

export default useFetchPutServices;