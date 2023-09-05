import { useState } from 'react';
import axios from 'axios';

const usePostServiceImg = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  console.log(response)

  const postServiceImg = async (fileList) => {
    const url = 'http://3.19.243.36:8080/s3/Mupload';
    try {
        const formData = new FormData();
        for (let i = 0; i < fileList.length; i++) {
          formData.append('file', fileList[i]);
        }

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

  return { postServiceImg, response, error };
};

export default usePostServiceImg;