import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "../styles/Card.css";
import { useFetchCategories } from "../hooks/useFetchCategories";
import { ClipLoader } from "react-spinners";




const Categories = () => {

  const { dataFetch, isLoading } = useFetchCategories();
  console.log(dataFetch);


  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(4);


  useEffect(() => {
    const updateCardsPerPage = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 480) {
        setCardsPerPage(1);
      } else if (screenWidth <= 1024) {
        setCardsPerPage(2);
      } else {
        setCardsPerPage(4);
      }
    };

    updateCardsPerPage();

    window.addEventListener("resize", updateCardsPerPage);
    return () => {
      window.removeEventListener("resize", updateCardsPerPage);
    };
  }, []);

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    const totalPages = Math.ceil(dataFetch?.length / cardsPerPage);
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = dataFetch?.slice(indexOfFirstCard, indexOfLastCard);
  console.log(currentCards)
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="containerTitleButton">
        <h2 className="titleCard">Categorias</h2>

      </div>
      <div className="cardContainer">
        {isLoading ? (
          <div className="spinner"><ClipLoader color="var(--color-primary-4)" size={80}/></div>
        ) : (
          currentCards.map((value, index) => (
            <div key={index} className="card">
              <Link
                to={`/${value.especialidad}`}
              >
                <h3 className="title">{value.especialidad}</h3>
                <img className="img" src={value.imagen} alt="imagen categoria" />
              </Link>
            </div>
          ))
        )}
      </div>

      <div className="pagination">
        <button
          className="paginationButton"
          disabled={currentPage === 1}
          onClick={goToPreviousPage}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        {dataFetch?.length > cardsPerPage &&
          Array.from(
            { length: Math.ceil(dataFetch.length / cardsPerPage) },
            (_, index) => (
              <button
                key={index}
                className={currentPage === index + 1 ? "active" : ""}
                onClick={() => paginate(index + 1)}
              ></button>
            )
          )}
        <button
          className="paginationButton"
          disabled={currentPage === Math.ceil(dataFetch?.length / cardsPerPage)}
          onClick={goToNextPage}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </>
  );
};

export default Categories;