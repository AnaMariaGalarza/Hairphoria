import { useState } from "react";

export function useFetchDeleteService(setData) {
  const [isLoadingDelete, setIsLoadingDelete] = useState(false);

  const deleteData = async (id, token) => {
    setIsLoadingDelete(true);
    const url = `http://3.19.243.36:8080/servicios/${id}`;

    try {
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        console.log("Servicio eliminado exitosamente");
        setData((prevData) => prevData.filter((value) => value.id !== id));
      } else {
        console.log("Error al eliminar el servicio");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoadingDelete(false);
    }
  };

  return { deleteData, isLoadingDelete };
}
