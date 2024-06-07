// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// export default function Success() {
//   const [count, setCount] = useState(10); // Corrected destructuring of useState
//   const navigate = useNavigate();

//   useEffect(() => {
//     const timeoutId = setInterval(() => {
//       setCount((prevCount) => {
//         if (prevCount === 0) {
//           clearInterval(timeoutId);
//           navigate("/");
//         }
//         return prevCount - 1;
//       });
//     }, 1000);

//     return () => clearInterval(timeoutId);
//   }, [navigate]);

//   return (
//     <div className="success">
//       <h1>Redirecting to Home Page in {count} seconds..</h1>
//       <Link to="/">
//         <button>Back to Home</button>
//       </Link>
//     </div>
//   );
// }


import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/success.css"

export default function Success() {
  const [count, setCount] = useState(10);
  const [reservation, setReservation] = useState(null); // State to hold reservation details
  const navigate = useNavigate();

  useEffect(() => {
    const fetchReservation = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/reservation/latest");
        setReservation(response.data);
      } catch (error) {
        console.error("Error fetching reservation details:", error);
      }
    };

    fetchReservation();

    const timeoutId = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount === 0) {
          clearInterval(timeoutId);
          navigate("/")
        }
        return prevCount - 1;
      });
    }, 1000);

    return () => clearInterval(timeoutId);
  }, [navigate]);

  return (
    <div className="success">
      {reservation ? (
        <div className="reservation-details">
          <h2>Reservation Details</h2>
          <div>
          <p><strong>Name:</strong> {reservation.firstName +" "+ reservation.lastName}</p>
          <p><strong>Email:</strong> {reservation.email}</p>
          <p><strong>Phone:</strong> {reservation.phone}</p>
          <p><strong>Date:</strong> {reservation.date}</p>
          <p><strong>Time:</strong> {reservation.time}</p>
          </div>
         </div>
      ) : (
        <p>Loading reservation details...</p>
      )}
      <h1>Redirecting to Home Page in {count} seconds..</h1>
      <Link to="/"><button>Back to Home</button></Link>

    </div>
  );
}
