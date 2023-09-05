import { useState } from "react";
import "../styles/ModalReserva.css";
import video from "../assets/logInVideo/HairSalon.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import DatePicker from "react-datepicker";
import { isTuesday } from "date-fns";
import { es } from 'date-fns/locale';
import 'react-datepicker/dist/react-datepicker.css';
import swal from "sweetalert";

const ModalReservar = ({ closeModalReservar }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [startDate, setStartDate] = useState(null);
  
  // Handle Changes 

  const handleDateChange = (date) => {
    setStartDate(date);
    const options = { month: '2-digit', day: '2-digit', year: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);
    const formattedTime = date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

    setSelectedDate({ ...selectedDate, fecha: formattedDate, hora: formattedTime });
};


  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedDate) {
      swal({
        title: "Reserva realizada",
        text: "¡Felicidades! Has agendado exitosamente tu cita. ¡Prepárate para una experiencia increíble!",
        icon: "success",
        button: "Aceptar",
      });
      closeModalReservar();
    } else {
      swal({
        title: "Campos incompletos",
        text: "Ingresa la fecha deseada y déjanos encargarnos del resto",
        icon: "error",
        button: "Aceptar",
      });
    }
  };

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
  if (selectedDate && selectedDate.fecha !== '') { // Verificar si selectedDate no es null
    const currentHour = today.getHours();
    const isToday = new Date(selectedDate.fecha).toDateString() === today.toDateString();
    const isAfter8PM = time.getHours() <= 20;

    if (isToday) {
      // Es el día de hoy, se aplica la restricción de horas mínimas y máximas
      return time.getHours() >= currentHour + 1 && isAfter8PM;
    } else {
      // Otros días, se permite cualquier hora dentro del rango de 8am a 8pm
      return time.getHours() >= 8 && time.getHours() <= 20;
    }
  }
  return false; // Si selectedDate es null o no tiene la propiedad 'fecha', retornar false
};


  const CustomDatePickerInput = ({ value, onClick }) => (
    <div className="custom-datepicker-input" onClick={onClick}>
      <span className="filtroFecha">{value ? value : "Fecha / Hora"}</span>     
    </div>
);


  return (
    <div className="modal-overlay">
      <div className="containerFormReservar">
        <div className="containerBoxReservar">
          <span className="close2" onClick={closeModalReservar}>
            &times;
          </span>
          <div className="containerVideoReservar">
            <video src={video} autoPlay loop muted></video>
          </div>

          <form className="containerLogInReservar" autoComplete="off">
            <h3>¡Reserva Ahora!</h3> <br />

            <label htmlFor="">
              <FontAwesomeIcon icon={faCalendarAlt} /> Fecha y Hora Disponible
            </label>
            <div className="picker">
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

            <br />
            <br />

            <div>
              <button
                className="buttonLogIn"
                onClick={handleSubmit}
                type="submit"
              >
                Reserva
              </button>
              <br />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalReservar;