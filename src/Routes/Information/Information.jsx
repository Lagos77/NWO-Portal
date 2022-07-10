import React from "react";
import "./Information.css"

import marina from './marina.jpeg'
import soros from './soros.jpg'
import macron from './macron.jpeg'
import albert from './albert.jpeg'
import ghis from './ghis.jpeg'

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
                    Satanist. Symbolism. Possible witchcraft. Good connections with Rothchild.
                    </p>
                    <button className="button">More Info</button>
                </div>
            </div>

            <div className="card">
                <div className="image-content">
                    <span className="overlay"></span>
                    <div className="card-image">
                        <img src={soros} alt="" className="card-img" />
                    </div>
                </div>
                <div className="card-content">
                    <h2 className="name">George Soros</h2>
                    <h3 className="dedication">Financier</h3>
                    <p className="description">
                    Founded Hillary's & Obama's campaign. Supporting the refugee crisis in Europe.
                    </p>
                    <button className="button">More Info</button>
                </div>
            </div>

            <div className="card">
                <div className="image-content">
                    <span className="overlay"></span>
                    <div className="card-image">
                        <img src={macron} alt="" className="card-img" />
                    </div>
                </div>
                <div className="card-content">
                    <h2 className="name">Emmanuel Macron</h2>
                    <h3 className="dedication">Politican/Financier</h3>
                    <p className="description">
                    President of France. Worked for "Rothschild & Cie Banque". Deal between Nestlé and Pfizer's food business.
                    </p>
                    <button className="button">More Info</button>
                </div>
            </div>

            <div className="card">
                <div className="image-content">
                    <span className="overlay"></span>
                    <div className="card-image">
                        <img src={albert} alt="" className="card-img" />
                    </div>
                </div>
                <div className="card-content">
                    <h2 className="name">Albert Bourla</h2>
                    <h3 className="dedication">Chairman & CEO of Pfizer</h3>
                    <p className="description">
                    Corporation has previous serious allegations. Refuses in public to take the "Pfizer–BioNTech COVID-19 vaccine".
                    </p>
                    <button className="button">More Info</button>
                </div>
            </div>

            <div className="card">
                <div className="image-content">
                    <span className="overlay"></span>
                    <div className="card-image">
                        <img src={ghis} alt="" className="card-img" />
                    </div>
                </div>
                <div className="card-content">
                    <h2 className="name">Ghislaine Maxwell</h2>
                    <h3 className="dedication">Founder of "The Terra Mar Project"</h3>
                    <p className="description">
                    International child trafficer. Former Jeffrey Epstein lover.
                    </p>
                    <button className="button">More Info</button>
                </div>
            </div>

        </div>
    )
}

export default Information;