// import React from "react";
// import dining from "../restaurant/others/dining.jpg"
// import "../css/reservation.css"
// import { useState, } from "react";
// import axios from "axios"
// import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";

// export default function Reservation(){

//     const {firstName, setFirstName} = useState("");
//     const {email, setEmail} = useState("");
//     const {lastName, setLastName} = useState("");
//     const {phone, setPhone} = useState(0);
//     const {date, setDate} = useState("");
//     const {time, setTime} = useState("");
//     const navigate = useNavigate();

//     const handleReservation= async (e)=>{
//         e.preventDefault();
//         console.log("Hello");
//         try{
//             const response = await axios.post("http://localhost:4000/reservation",
//                 {firstName, lastName, email, phone, date, time},{
//                 headers:{
//                     "Content-Type" : 'application/json'
//                 },
//                 withCredentials: true,
//             }
//         );
//         toast.success(response.data.message);
//         setFirstName("");
//         setDate("");
//         setEmail("");
//         setPhone(0);
//         setLastName("");
//         setTime("");
//         navigate("/success")
//         }catch(error){
//             toast.error(error.response?.data?.message || "An error Occurred");
//         }
//     }



//     return (
//         <div className="reservation" onSubmit={handleReservation}>
//             <div>
//                 <img className="dining-img" src={dining} alt="Dining" />
//             </div>
//             <div>
//                 <form>
//                 <h2>Reservation</h2>
//                     <div className="names">
//                         <div className="firstName">
//                             <input className="firstName-input" name={firstName} value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
//                             <label className="firstName-label">First Name:</label>
//                         </div>
//                         <div className="lastName">
//                             <input className="lastName-input" type="text" />
//                             <label className="lastName-label">Last Name:</label>
//                         </div>
//                     </div>
//                     <div className="email-phone">
//                         <div className="email">
//                             <input className="email-input" type="text" />
//                             <label className="email-label">Email:</label>
//                         </div>
//                         <div className="phone">
//                             <input className="phone-input" type="text"  />
//                             <label className="phone-label">Phone Number:</label>
//                         </div>
//                     </div>
//                     <div className="date-time">
//                         <div className="date">
//                             <input className="date-input" type="date" />
//                             <label className="date-label">Date:</label>
//                         </div>
//                         <div className="time">
//                             <input className="time-input" type="time" />
//                             <label className="time-label">Time:</label>
//                         </div>
//                     </div>
//                     <button type="submit">Reserve</button>
//                 </form>
//             </div>
//         </div>
//     )
// }


import React, { useState } from "react";
import dining from "../restaurant/others/dining.jpg";
import "../css/reservation.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function Reservation() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const navigate = useNavigate();

  const handleReservation = async (e) => {
    e.preventDefault();
    console.log("Submitting reservation");

    try {
      const response = await axios.post(
        "http://localhost:4000/reservation",
        { firstName, lastName, email, phone, date, time },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(response.data.message);
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setDate("");
      setTime("");
      navigate("/success");
    } catch (error) {
      toast.error(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div className="reservation">
      <div className="img-div">
        <img className="dining-img" src={dining} alt="Dining" />
      </div>
      <div>
        <form onSubmit={handleReservation}>
          <h2>Reservation</h2>
          <div className="names">
            <div className="firstName">
              <input
                className="firstName-input"
                name="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <label className="firstName-label">First Name:</label>
            </div>
            <div className="lastName">
              <input
                className="lastName-input"
                name="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
              <label className="lastName-label">Last Name:</label>
            </div>
          </div>
          <div className="email-phone">
            <div className="email">
            <input
                className="email-input"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label className="email-label">Email:</label>
            </div>
            <div className="phone">
              <input
                className="phone-input"
                type="tel"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              <label className="phone-label">Phone Number:</label>
            </div>
          </div>
          <div className="date-time">
            <div className="date">
              <input
                className="date-input"
                type="date"
                name="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
              <label className="date-label">Date:</label>
            </div>
            <div className="time">
              <input
                className="time-input"
                type="time"
                name="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
              />
              <label className="time-label">Time:</label>
            </div>
          </div>
          <button type="submit">Reserve</button>
        </form>
      </div>
    </div>
  );
}
