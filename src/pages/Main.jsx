import React from "react";
import thai from "../restaurant/others/thai.jpg"
import lasagna from "../restaurant/others/lasgna.jpg"
// import asianFood from "../restaurant/others/asian food.jpg"
import veggies from "../restaurant/others/1996.jpg"
import '../css/main.css'

export default function Main(){

    return (
        <div className="main">
            
            <div className="main-div">
            <div className="main-child1">
                <img className="main-img1" src={veggies} alt="Asian Food"/>
            </div>
            <div className="main-child2">
                <img className="main-img2" src={thai} alt="thai" />
            </div>
            <div className="main-child3">
                <img className="main-img3" src={lasagna} alt="lasagna" />
            </div>
            </div>
        </div>
    )
}