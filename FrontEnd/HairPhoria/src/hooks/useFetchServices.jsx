import { useState, useEffect } from "react";

export function useFetchServices() {
    const url = "http://3.19.243.36:8080/servicios";
    const [dataFetch, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setData(data);
                console.log(data)
                setIsLoading(false);
            } catch (error) {
                console.error(error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return { dataFetch, isLoading };
}
