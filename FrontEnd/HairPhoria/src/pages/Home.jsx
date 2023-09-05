import React, { useState, useEffect } from 'react';
import BarSearch from '../components/BarSearch';
import Categories from '../components/Categories';
import Recommended from '../components/Recommended';
import ServiceSearch from '../components/ServiceSearch'
import { useFetchServices } from '../hooks/useFetchServices';
import ModalShare from '../components/ModalShare';
import '../styles/HeaderAndSearchVideo.css';
import { faShareNodes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Home = () => {
  const servicios = useFetchServices();
  console.log(servicios);

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [isShareButtonFixed, setIsShareButtonFixed] = useState(true);
  const [mostarCategorias , setMostarCategorias] = useState(true);
  const [mostrarBusqueda , setMostrarBusqueda] = useState(false);
  const [search , setSearch] = useState()

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isFixed = prevScrollPos > currentScrollPos || currentScrollPos === 0;
      setPrevScrollPos(currentScrollPos);
      setIsShareButtonFixed(isFixed);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <>
      <BarSearch setMostarCategorias={setMostarCategorias} setMostrarBusqueda={setMostrarBusqueda} setSearch={setSearch}/>
      {mostarCategorias && <Categories />}
      {mostrarBusqueda && <ServiceSearch search={search} />}
      <Recommended />

      <button
        className={`share-button ${isShareButtonFixed ? 'fixed-share-button' : ''}`}
        onClick={handleOpenModal}
      >
        <FontAwesomeIcon icon={faShareNodes} />
      </button>

      <ModalShare
        isOpen={isOpenModal}
        onClose={() => setIsOpenModal(false)}
        shareUrl="http://s3-hairphoria-front.s3-website.us-east-2.amazonaws.com/" 
      />
    </>
  );
};

export default Home;
