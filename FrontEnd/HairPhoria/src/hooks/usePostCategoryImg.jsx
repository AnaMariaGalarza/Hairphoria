import { useState } from 'react';
import axios from 'axios';

const usePostCategoryImg = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const postCategoryImg = async (file) => {
    const url = 'http://3.19.243.36:8080/s3/upload';
    try {
      const formData = new FormData();
      formData.append('file', file);

      const token = localStorage.getItem('token');
      const response = await axios.post(url, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      setResponse(response.data);
      console.log('Imagen subida exitosamente:', response.data);
    } catch (error) {
      setError(error);
      console.log('Error al subir la imagen:', error);
    }
  };

  return { postCategoryImg, response, error };
};

export default usePostCategoryImg;
