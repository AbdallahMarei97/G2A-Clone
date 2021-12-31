import React,{useState} from 'react'
import "./detailed-room.css"
import { useParams, useNavigate } from "react-router-dom";
import ReservationForm from '../reservation-form/reservation-form';

function DetailedRoom({rooms}) {
    const { title } = useParams();
    const [showForm, setShowForm] = useState(false);
    const navigate = useNavigate();

    const checkForUser = () => {
        const user = JSON.parse(localStorage.getItem("loggedUser"))
        if (user) {
            setShowForm(true);
        } else {
            navigate("/login")
            setShowForm(false)
        }
    }
  const cancelForm = () => {
    setShowForm(false);
  };

    return (
        <div>
        {rooms
          .filter((room) => room.title === title)
          .map((room) => (
              <div>
            <div className='detailed-room-container' key={room.id}>
              <div className="room-photo-container-detailed">
            <img className="room-photo-detailed" src={room.image} alt={room.title} />
          </div>
          <div className='price-and-btn-detailed'>
          <h2 className="room-title-detailed">{room.title}</h2>
          <p className='room-desc-detailed'>{room.description}</p>
            <span className="room-price-detailed">Price: ${room.price}/hour</span>
            {!showForm ? (
                <button className="book-room-btn" onClick={checkForUser}>
                  Book Now
                </button>
              ) : (
                <button className="book-room-btn" onClick={cancelForm}>
                  Cancel
                </button>
              )}
          </div>
            </div>
              {showForm ? <ReservationForm service={room} /> : ""}
            </div>
          ))}
      </div>
    )
}

export default DetailedRoom
