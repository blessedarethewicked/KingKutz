import React from 'react'
import './Services.css'
import { GiBeard } from 'react-icons/gi';

function Services() {
    return (
        <div className="services-container">
            <h2 className="services-title"> Services and Styles</h2>
            
            <div className="row">

                <div className="service">
                    <div className="svg">
                    <img src={process.env.PUBLIC_URL + "/images/fade.jpg" }
                            className='fade-image' alt="Fade Hair cut" />


                    </div>
                    <p className="large">
                        SKIN FADE

                    </p>
                    <p className="s-text">A Skin fade is a cut where the length of the hair gradualy descreses
                        thus creating a gradient/fade. <b>(£20)</b>
                    </p>
                </div>

                <div className="service">
                    <div className="svg">
                    <img src={process.env.PUBLIC_URL + "/images/Beard.png" }
                            className='beard-image' alt="Fade Hair cut" />

                    </div>
                    <p className="large">
                        BEARDS

                    </p>
                    <p className="s-text">Good facial hair can make or break a man so we make sure to take care 
                        when dealing with it. We offer beard trims and full beard shaves. 
                        Look your best with a sharp and well trimmed beard.
                        </p>
                </div>

                <div className="service">
                    <div className="svg">
                    <img src={process.env.PUBLIC_URL + "/images/child.png" }
                            className='child-image' alt="Fade Hair cut" />
                        
                    </div>
                    <p className="large">
                        LITTLE KIDS

                    </p>
                    <p className="s-text">We also do cuts for kids. We know that presentation is important
                        therefore we give a fresh cut to show of to their friends
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Services
