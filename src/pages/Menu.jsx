import React from "react";
import dumBiryani from "../restaurant/Menu/dum.webp"
import RoastBiryani from "../restaurant/Menu/roast biryani.avif"
import muttonBiryani from "../restaurant/Menu/MuttonBiryani.webp"
import VegBiryani from "../restaurant/Menu/veg biryani.jpg"
import PrawnBiryani from "../restaurant/Menu/Prawn Biryani.jpg"
import VegThaali from "../restaurant/Menu/veg thaali.webp"
import ButterNaan from "../restaurant/Menu/butter naan.webp"
import lasagna from "../restaurant/Menu/Classic Lasagna.jpg"
import Ramen from "../restaurant/Menu/ramen.webp"
// import TomYum from "../restaurant/Menu/Tom Yum.webp"
import "../css/menu.css"


export default function Menu(){

    const menuData = [
        {
            id: 1,
            name: "Chicken biryani",
            price: 230,
            image: dumBiryani,
            rating: 9.4
        },
        {
            id: 2,
            name: "Roast Biryani",
            price: 250,
            rating: 9.3,
            image: RoastBiryani
        },
        {
            id:3,
            name: "Mutton Biryani",
            price: 280,
            rating: 9.6,
            image: muttonBiryani
        },
        {
            id : 4,
            name: "Veg Biryani",
            price: 200,
            rating: 9.2,
            image: VegBiryani
        },
        {
            id : 5,
            name: "Prawn Biryani",
            price: 280,
            rating: 9.5,
            image: PrawnBiryani
        },
        {
            id:6,
            name: "Butter Naan",
            price: 50,
            rating: 9.5,
            image: ButterNaan
        },
        {
            id:7,
            name: "Veg Thaali",
            price: 150,
            rating: 9.4,
            image: VegThaali
        },
        {
            id:8,
            name: "Classic Lasagna",
            price: 250,
            rating: 9.0,
            image: lasagna
        },
        {
            id:9,
            name: "Chineese Ramen",
            price: 250,
            rating: 9.2,
            image: Ramen
        },
        // {
        //     name: "Tom Yum goong",
        //     price: 350,
        //     image : TomYum
        // }
    ]
    return(
        <div className="menu">
            <h1>Our Specialities</h1>
            <div className="menu-container">
            {
                menuData.map((item)=>{
                    return <div className="menu-card" key={item.id}>
                        <img className="menu-img" src={item.image} alt={item.name} />
                        <div className="menu-info">
                        <h2>{item.name}</h2>
                        <p>Price : ₹{item.price}</p>
                        <p>Raiting : {item.rating}</p>
                        </div>
                    </div>
                })
            }
            </div>
          
        </div>
    )
}