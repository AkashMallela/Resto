import React from "react";
// import {Link} from "react-router-dom";
import { Link } from "react-scroll";
import "../css/navbar.css"


export default function Navbar(){
    const navItems = [
        {
            id: 1,
            name : "Home",
            to : "home",
        },
        {
            id: 2,
            name: "About",
            to: "about",
        },
        {
            id: 3,
            name: "Our team",
            to: "team",
        },
        {
            id: 4,
            name: "Menu",
            to: "menu"
        },
    ]
    return (
        <div className="navbar">
            <h1 className="title">Resto</h1>
            <div className="nav-items">
                {
                    navItems.map((item)=>{
                        return <div className="items-div" key={item.id}>
                        <Link className="nav-item" to={item.to} spy={true} smooth={true} duration={500} >{item.name}</Link>
                        </div>
                    })
                }
                <Link to="reservation"><button>Reservation</button></Link>
            </div>
        </div>
    )
}