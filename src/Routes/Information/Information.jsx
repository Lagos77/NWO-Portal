import React from "react";
import "./Information.css"

import marina from './marina.jpeg'

const Information = () => {

    return (
        <div className="info-body">
            <div className="card">
                <div className="image-content">
                    <span className="overlay"></span>
                    <div className="card-image">
                        <img src={marina} alt="" className="card-img" />
                    </div>
                </div>
                <div className="card-content">
                    <h2 className="name">Marina Abramović</h2>
                    <h3 className="dedication">Body Art/Shock Art</h3>
                    <p className="description">
                        testing testing testing and more testing
                    </p>
                    <button className="button">More Info</button>
                </div>
            </div>
        </div>
    )
}

export default Information;