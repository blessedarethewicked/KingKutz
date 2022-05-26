import React from 'react'
import './Services.css'



function Services() {
    return (
        <div className="services-Container">
            {/* <h2 className="services-title"> Services and Styles</h2> */}
            <div className="services-grid">
                
                {/* Fade */}
                <div className="service">
                    <div className="img">
                        <img src={process.env.PUBLIC_URL + "/images/fade1.png" }
                                className='fade-image' alt="Fade Hair cut" 
                        />
                    </div>
                    <div className="text">

                        <p className="service-title">
                            <b>SKIN FADE</b>
                        </p>
                        <p className="service-text">
                            A Skin fade is a cut where the length of the hair gradualy descreses
                            thus creating a gradient/fade. <b>(£20)</b>
                        </p>
                    </div>
                </div>

                {/* BEARDS */}
                <div className="service-reverse">
                    <div className="img">
                    <img src={process.env.PUBLIC_URL + "/images/Beard.png" }
                            className='beard-image' alt="Beards" />
                    </div>

                    <div className="text">
                        <p className="service-title">
                            <b>BEARDS</b>

                        </p>
                        <p className="service-text">
                            Good facial hair can make or break a man so we make sure to take care 
                            when dealing with it. We offer beard trims and full beard shaves. 
                            Look your best with a sharp and well trimmed beard.
                        </p>
                    </div>
                    
                </div>

                {/* Children */}
                <div className="service">
                    <div className="img">
                    <img src={process.env.PUBLIC_URL + "/images/child.png" }
                            className='child-image' alt="Child Hair Cut" />
                    </div>

                    <div className="text">
                        <p className="service-title">
                            <b>CHILDREN</b>
                        </p>

                    
                        <p className="service-text">
                            We also do cuts for kids. We know that presentation is important
                            therefore we give a fresh cut to show off to their friends.
                        </p>
                    </div>
                    
                </div>

            </div>
        </div>
    )
}

export default Services
