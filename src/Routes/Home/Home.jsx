import React from "react";
import "./Home.css"
import img1 from "./eye.jpeg"

const Home = () => {

    return (
        <div className="home-container">
       
                <div className="Title">
                    <h2>Welcome</h2>
                </div>
                <div className="presentation">
                    <h4>To the database of the new world order</h4>
                </div>
                <div className="image-container">
                   <img src={img1} alt="" className="home-img"/>
                </div>
        
        </div>
    )
}

export default Home;