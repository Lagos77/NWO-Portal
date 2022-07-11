import React from "react";
import "./Information.css"
import { Link } from "react-router-dom";

import marina from './PersonImage/marina.jpeg'
import soros from './PersonImage/soros.jpg'

const Information = () => {

    const personsList = [
        {
            name: 'Marina Abramović',
            profile: marina,
            dedication: 'Body Art/Shock Art',
            description: 'Satanist. Symbolism. Possible witchcraft. Good connections with Rothchild.'
        }, {
            name: 'George Soros',
            profile: soros,
            dedication: 'Financier',
            description: "Founded Hillary's & Obama's campaign. Supporting the refugee crisis in Europe."
        }, 
    ];

    return (
        <div className="info-body">
            {personsList.map(person => {
                return (
                    <div key={person.name} className="card">
                        <div className="image-content">
                            <span className="overlay"></span>
                            <div className="card-image">
                                <img src={person.profile} alt="" className="card-img" />
                            </div>
                        </div>
                        <div className="card-content">
                            <h2 className="name">{person.name}</h2>
                            <h3 className="dedication">{person.dedication}</h3>
                            <p className="description">{person.description}</p>
                            <Link to="/information/content">
                            <button className="button">More Info</button>
                            </Link>
                
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Information;