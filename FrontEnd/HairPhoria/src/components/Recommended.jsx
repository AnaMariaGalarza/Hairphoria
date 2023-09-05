import "../styles/Card.css";
import { routes } from "../routes";
import { Link } from "react-router-dom";
import { useFetchServices } from "../hooks/useFetchServices";
import { ClipLoader } from "react-spinners";
import {useEffect, useState } from "react";

const Recommended = () => {

    const { dataFetch, isLoading } = useFetchServices();
    const [randomRecommended, setRandomRecommended] = useState([]);

    useEffect(() => {
      if (dataFetch) {
        const randomIndices = [];
        while (randomIndices.length < 4) {
          const randomIndex = Math.floor(Math.random() * dataFetch.length);
          if (!randomIndices.includes(randomIndex)) {
            randomIndices.push(randomIndex);
          }
        }
        const newRandomRecommended = randomIndices.map(index => dataFetch[index]);
        setRandomRecommended(newRandomRecommended);
      }
      },[dataFetch])
    
     
    
  
    return (
        <div>
        <h2 className="titleCard">Servicios recomendados</h2>
        {isLoading ? (
          <div className="spinner"><ClipLoader color="var(--color-primary-4)" size={80}/></div>
        ) : (
          <div className="cardContainer cardContainerRecommended">
        {randomRecommended.map((card, index) => (
          <div key={index} className="card">
          <Link  to={`${routes.details}/${card.nombre}`}>
            <h3 className="title">{card.nombre}</h3>
            <img className="img" src={card.imagen[0]} alt="imagen Recommended" />
          </Link>
          </div>
        ))} 
        
        </div>)
        }
        

    </div>
    )
}


export default Recommended