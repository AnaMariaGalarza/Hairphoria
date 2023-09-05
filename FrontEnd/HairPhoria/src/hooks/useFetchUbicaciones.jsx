import { useState, useEffect } from "react";

export function useFetchUbicaciones() {
    const url = "http://3.19.243.36:8080/ubicaciones";
    const [dataFetchUbicaciones, setDataUbicaciones] = useState();
    const [isLoadingUbUbicaciones, setIsLoadingUbicaciones] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setDataUbicaciones(data);
                console.log(data)
                setIsLoadingUbicaciones(false);
            } catch (error) {
                console.error(error);
                setIsLoadingUbicaciones(false);
            }
        };

        fetchData();
    }, []);

    return { dataFetchUbicaciones, isLoadingUbUbicaciones };
}