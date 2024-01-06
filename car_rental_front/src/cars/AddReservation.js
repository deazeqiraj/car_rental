import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes, faCalendar, faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams,Link } from "react-router-dom";

function AddReservation() {
  const navigate = useNavigate();
  const { carId } = useParams();

  const [reservationDto, setReservationDto] = useState({
    date_from: "",
    date_to: "",
    price: "",
    car_id: carId,
  });

  const onInputChange = (event) => {
    const { name, value } = event.target;
    setReservationDto({ ...reservationDto, [name]: value });
  };

  const { date_from, date_to, price } = reservationDto;

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(`http://localhost:8080/api/reservations/save/${carId}`, reservationDto);
      navigate("/");
    } catch (error) {
      
      console.error("Error occurred while adding reservations:", error);
    }
  };

  return (
    <div>
      <h2>Add Reservation</h2>
      <form onSubmit={(event) => onSubmit(event)}>
        <div className="mb-3 d-flex align-items-center">
          <label htmlFor="Date from" className="form-label with-shadow">
            <FontAwesomeIcon
              icon={faCalendar}
              className="mr-2"
              style={{ color: "#9400D3" }}
            />
          </label>
          <input
            type="date"
            className="form-control with-shadow custom-input"
            placeholder="Date from"
            name="date_from"
            value={date_from}
            onChange={(event) => onInputChange(event)}
          />
        </div>
        <div className="mb-3 d-flex align-items-center">
          <label htmlFor="Description" className="form-label with-shadow">
            <FontAwesomeIcon
              icon={faCalendar}
              className="mr-2"
              style={{ color: "#9400D3" }}
            />
          </label>
          <input
            type="date"
            className="form-control with-shadow custom-input"
            placeholder="date"
            name="date_to"
            value={date_to}
            onChange={(event) => onInputChange(event)}
          />
        </div>
        <div className="mb-3 d-flex align-items-center">
          <label htmlFor="Description" className="form-label with-shadow">
            <FontAwesomeIcon
              icon={faMoneyBill}
              className="mr-2"
              style={{ color: "#9400D3" }}
            />
          </label>
          <input
            type="number"
            className="form-control with-shadow custom-input"
            placeholder="Price"
            name="price"
            value={price}
            onChange={(event) => onInputChange(event)}
          />
        </div>
        <button className="btn btn-primary mx-2" style={{ backgroundColor: "#9400D3", borderColor: "#9400D3" }}>
          <FontAwesomeIcon icon={faCheck} />
        </button>

        <Link className="btn btn-primary mx-2" style={{ backgroundColor: "#9400D3", borderColor: "#9400D3" }} to="/">
          <FontAwesomeIcon icon={faTimes} />
        </Link>
      </form>
    </div>
  );
}

export default AddReservation;
