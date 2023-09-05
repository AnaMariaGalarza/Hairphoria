import { useState, useEffect, forwardRef } from 'react';
import DatePicker from "react-datepicker";
import Select from 'react-select';
import video from '../assets/headerVideo/videoheader.mp4';
import swal from "sweetalert";
import '../styles/BarSearch.css';
import 'react-datepicker/dist/react-datepicker.css';
import { es } from 'date-fns/locale';
import { useFetchCategories } from '../hooks/useFetchCategories';
import { useFetchUbicaciones } from '../hooks/useFetchUbicaciones';



const SearchBar = ({setMostarCategorias, setMostrarBusqueda, setSearch}) => {
  const [busqueda, setBusqueda] = useState({
    ciudad: '',
    categoria: '',
    fecha: '',
    hora: ''
  });


  // Filtro Ciudad y categorias
  const { dataFetch , isLoading} = useFetchCategories();
  const { dataFetchUbicaciones, isLoadingUbUbicaciones} = useFetchUbicaciones();
  const [ciudades, setCiudades] = useState([]);
  const [categorias, setCategorias] = useState([]);
  useEffect(() => {
    if (!isLoading) {
      const categorias = dataFetch.map((e) => ({
        value: e.especialidad,
        label: e.especialidad
      }));
      setCategorias(categorias);
    }
    if (!isLoadingUbUbicaciones) {
      const ciudades = dataFetchUbicaciones.map((e) => ({
        value: e.ciudad,
        label: e.ciudad
      }));
      setCiudades(ciudades);
    }
  }, [isLoading, isLoadingUbUbicaciones]);


  // Filtro fecha y horario
  const [startDate, setStartDate] = useState(null);
  const [diasDisponibles, setDiasDisponibles] = useState(["Domingo", "Lunes" , "Miércoles", "Jueves", "Viernes", "Sábado"]);

  const filterAvailableDates = (date) => {
    const dayOfWeek = date.getDay();
    return diasDisponibles.includes(getDayOfWeekName(dayOfWeek));
  };

  const getDayOfWeekName = (dayOfWeek) => {
    const daysOfWeek = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    return daysOfWeek[dayOfWeek];
  };

  const filterAvailableTimes = (time) => {
    const today = new Date();
    if (busqueda.fecha !== '') {
      const currentHour = today.getHours();
      const isToday = new Date(busqueda.fecha).toDateString() === today.toDateString();
      const isAfter8PM = time.getHours() <=20;
  
      if (isToday) {
        // Es el día de hoy, se aplica la restricción de horas mínimas y máximas
        return time.getHours() >= currentHour+1 && isAfter8PM;
      } else {
        // Otros días, se permite cualquier hora dentro del rango de 8am a 8pm
        return time.getHours() >= 8 && time.getHours() <= 20;
      }
    }
  };

  // Handle Changes
  const handleCategoriaChange = (selectedOption) => {
    if (selectedOption === null) {
      selectedOption = ''
    }
    setBusqueda({ ...busqueda, categoria: selectedOption });
  };
  const handleUbicacionesChange = (selectedOption) => {
    if (selectedOption === null) {
      selectedOption = ''
    }
    setBusqueda({ ...busqueda, ciudad: selectedOption });
  };
  const handleDateChange = (date) => {
      setStartDate(date);
      const options = { month: '2-digit', day: '2-digit', year: 'numeric' };
      const formattedDate = date.toLocaleDateString('en-US', options);
      const formattedTime = date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  
      setBusqueda({ ...busqueda, fecha: formattedDate, hora: formattedTime });
  };
  const CustomDatePickerInput = ({ value, onClick }) => (
      <div className="custom-datepicker-input" onClick={onClick}>
        <span className="filtroFecha">{value ? value : "Fecha / Hora"}</span>     
      </div>
  );

  //sumbit 
  const [isFormValid, setIsFormValid] = useState(false);

  const validateForm = () => {
    const { ciudad, categoria, fecha, hora } = busqueda;
    if (!ciudad || !categoria || !fecha || !hora) {
      swal({
        text: "Todos los campos son requeridos",
        icon: "warning",
        button: "Aceptar",
      });
      return false;
    }
    return true;
  };
  

  const submitCheck = (event) => {
    event.preventDefault();
  
    // Verificar si todos los campos requeridos tienen valores
    if (validateForm()) {
      setMostarCategorias(false);
      setMostrarBusqueda(true);
      setSearch(busqueda);
    }
  };
  

  

  return (
    <section className="section-buscador">
      <video autoPlay loop muted id="video" className='loopVideo'>
        <source src={video} type="video/mp4" />
      </video>
      <div className="container-buscador">
        <div className="titulo">
          <h1>HairPhoria</h1>
        </div>
        <span className='mensajeSearch'>Reserva tu cita en cualquiera de nuestras sedes, para un día de mimos y cuidados</span>
        <div className='form-container'>
          <form onSubmit={submitCheck}>
            <div style={{ minHeight: "42px", minWidth: "240px" }}>
              <Select
                className="ciudad-select"
                value={busqueda.ciudad}
                onChange={handleUbicacionesChange}
                options={ciudades}
                placeholder="✂ Ciudad"
                isClearable
                isSearchable
              />
            </div>
            <div style={{ minHeight: "42px", minWidth: "240px" }}>
              <Select
                className="categoria-select"
                value={busqueda.categoria}
                onChange={handleCategoriaChange}
                options={categorias}
                placeholder="✂ Categoria"
                isClearable
                isSearchable
              />
            </div>
            <div className='picker'>
            <DatePicker
                locale={es}
                // closeOnScroll={true}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={60}
                dateFormat="MMM d, yy h:mm aa"
                minDate={new Date() - 1}
                monthsShown={2}
                filterTime={filterAvailableTimes}
                customInput={<CustomDatePickerInput />}
                onChange={handleDateChange}
                selected={startDate}
                filterDate={filterAvailableDates} 
                isClearable
              />
            </div>
            
            <button className='buttonSearch'>Buscar</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SearchBar;



