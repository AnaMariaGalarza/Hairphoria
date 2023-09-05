import { useState } from "react";
import axios from "axios";

export const usePutLocation = () => {
  const [isEditCity, setIsEditCity] = useState(false);

  const editCity = async (ciudad, ubicacion) => {
    console.log(ciudad);
    const url = `http://3.19.243.36:8080/ubicaciones/${ciudad}`;
    try {
      setIsEditCity(true);
      const token = localStorage.getItem("token");
      const response = await axios.put(url, ubicacion, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        console.log("Servicio editado exitosamente");
      }
    } catch (error) {
      console.error(error);
      throw error;
    } finally {
      setIsEditCity(false);
    }
  };

  const [isDeleteCity, setIsDeleteCity] = useState(false);
  const deleteCity = async (ciudad) => {
    console.log(ciudad);
    const url = `http://3.19.243.36:8080/ubicaciones/${ciudad}`;
    try {
      setIsDeleteCity(true);
      const token = localStorage.getItem("token");
      const response = await axios.delete(url, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        console.log("Ciudad eliminada exitosamente");
      }
    } catch (error) {
      console.error(error);
      throw error;
    } finally {
      setIsDeleteCity(false);
    }
  };

  return { editCity, isEditCity, deleteCity, isDeleteCity };
};