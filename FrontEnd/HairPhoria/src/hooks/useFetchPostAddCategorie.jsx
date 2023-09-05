import { useState } from 'react';

export function useFetchPostAddCategorie() {
  const [dataFetch, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const addCategorie = async (categorie) => {
    const url = 'http://3.19.243.36:8080/categorias';

    try {
      const token = localStorage.getItem('token');
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(categorie),
      });

      if (response.ok) {
        const data = await response.json();
        setData(data);
        console.log('Categoría agregada exitosamente');
      } else {
        throw new Error('Error al agregar la categoría');
      }

      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      throw error;
    }
  };

  return { addCategorie, isLoading, dataFetch };
}