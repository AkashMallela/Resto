import React from "react";
// import asianFood from "../restaurant/others/asian food.jpg"
import longimg from "../restaurant/others/about.jpg"
import '../css/about.css'


export default function About(){
    return(
        <div className="about">
            <div className="about-info">
            <h1>About</h1>
                <p>At our restaurant, we pride ourselves on offering a diverse menu that caters to all tastes and preferences. Our dishes are crafted with the freshest ingredients, ensuring rich flavors and exceptional quality. From hearty, comfort foods to elegant gourmet creations, every plate is a celebration of culinary excellence. We also feature a selection of vegan, gluten-free, and healthy options to accommodate various dietary needs. Come and experience our warm, inviting atmosphere where every meal is a memorable occasion.</p>
            </div>
                <img className="about-img" src={longimg} alt="img"/>
        </div>
    )
}