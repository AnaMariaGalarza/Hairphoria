import { useState } from "react";
import swal from "sweetalert";

export function useFetchRegister() {
  const [dataFetch, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const register = async (nombre, apellido, documento, email, password, rol) => {
    const url = "http://3.19.243.36:8080/clientes";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({nombre, apellido, documento, email, password, rol}),
      });

      if (response.ok) {
        const data = await response.json();
        setData(data);
        console.log("datos completados, verifica tu correo");

      } else {
        throw new Error( swal({
          text: "Ya existe una cuenta con este email, por favor intenta con un email diferente",
          icon: "warning",
          button: "Aceptar",
        }));
      }

      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      throw error;
    }
  };

  return { register, dataFetch, isLoading };
}