import React from "react";
import Chef from "./Chefs";
import Menu from "./Menu";
import Main from "./Main";
import About from "./About";
import Footer from "./footer";
// import { Element } from "react-scroll";
import Reservation from "./Reservation";
import Navbar from "../components/Navbar";

export default function Home(){
    
    
    return(
        <div>
                <Navbar />
                <Main />
                <About />
                <Chef />
                <Menu />
                <Reservation />
                <Footer />
        </div>
    )
}