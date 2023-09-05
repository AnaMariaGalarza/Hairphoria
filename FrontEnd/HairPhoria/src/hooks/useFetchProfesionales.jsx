import { useState, useEffect } from "react";

export function useFetchProfesionales(){
    const url = "http://3.19.243.36:8080/profesionales"
    const [dataFetch, setData] = useState()
    useEffect(()=>{
        fetch(url)
        .then((res)=> res.json())
        .then((data)=> setData(data))
    },[])
    return dataFetch;
}