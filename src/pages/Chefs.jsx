import React from "react";
import chef1 from '../restaurant/chefs/chef1.jpg'
import chef2 from '../restaurant/chefs/chef2.jpg'
import woman1 from '../restaurant/chefs/woman1.jpg'
import woman2 from '../restaurant/chefs/woman2.jpg'
import woman3 from '../restaurant/chefs/woman3.jpeg'
import '../css/chef.css'

export default function Chef(){
    const chefData = [
        {
            id : 1,
           name : "Antony marc",
           speciality: "Chineese",
           rating: 4.8,
           image:chef1,
        },
        {
            id : 2,
            name: "Sarah joseph",
            speciality: "Indian",
            rating: 4.7,
            image: woman2
        },
        {
            id : 3,
            name: "Robert mackie",
            speciality: "Italian",
            rating: 4.4,
            image: chef2
        },
        {
            id : 4,
            name: "Jadory ruth",
            speciality: "Malasian",
            rating: 4.5,
            image: woman1
        },
        {
            id : 5,
            name : "Jerinya stubbs",
            speciality : "Thai",
            rating : 4.6,
            image: woman3
        }
    ];
    return (
        <div className="chef">
            <h1> Our Team</h1>
            <div className="container">
                {
                    chefData.map((item)=>{
                        return <div className="card" key={item.id}>
                            <img className="chef-img" src={item.image} alt={item.name}/>
                            <h2>{item.name}</h2>
                            <h3>Speciality : {item.speciality} </h3>
                            <p>Rating : {item.rating}</p>
                        </div>
                    })
                }
            </div>
        </div>
    )
}