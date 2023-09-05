import { useState, useEffect } from "react";

export function useFetchCliente(id) {
  const url = `http://3.19.243.36:8080/clientes/${id}`;
  const [dataFetch, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        setData(data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id, url]);

  return { dataFetch, isLoading };
}