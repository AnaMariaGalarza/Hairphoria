import { useState } from "react";

export function useFetchAddService() {
  const [isLoadingService, setIsLoadingService] = useState(false);


  const agregarServicio = async (nuevoServicioObj ) => {
    console.log("NUEVO SERVICIO OBJETO: ",nuevoServicioObj);
    const url = "http://3.19.243.36:8080/servicios";

    try {
      setIsLoadingService(true);
      const token = localStorage.getItem('token');
      const response = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nuevoServicioObj ),
      });


      if (response.ok) {
        console.log("Servicio agregado exitosamente");
      }
    } catch (error) {
      console.error(error);
      throw error;
    } finally {
      setIsLoadingService(false);
    }
  };

  return { agregarServicio, isLoadingService };
}