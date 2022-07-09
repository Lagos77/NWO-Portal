import React from "react";
import "./Information.css"

import usa from './usa.png';
import swe from './swe.png';
import nato from './nato.png';

const Information = () => {

    return (
        <div className="info-container">

            <div className="container">
                <div className="img-cont">
                    <img src={usa} alt="" />
                </div>
                <section>
                    <h3>United States</h3>
                </section>
            </div>

            <div className="container">
                <div className="img-cont">
                    <img src={swe} alt="" />
                </div>
                <section>
                    <h3>Sweden</h3>
                </section>
            </div>

            <div className="container">
                <div className="img-cont">
                    <img src={nato} alt="" />
                </div>
                <section>
                    <h3>NATO</h3>
                </section>
            </div>

        </div>
    )
}

export default Information;