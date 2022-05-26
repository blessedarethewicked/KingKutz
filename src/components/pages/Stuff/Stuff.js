import React from 'react'
import './Stuff.css';

function Stuff() {
  return (

    <div className="stuff-container">
        <div className="stuff">
            <div className="stuff-image">
                <img src={process.env.PUBLIC_URL + "/images/derek-headshot.jpg"}
                    className='headshot-img' alt="Derek's HeadShot" />
            </div>
            <div className="stuff-info">
                <h3><b>Dereck</b></h3>
                <p>Our award winning barber, with 9 years over experience.
                    He is great with any hair type, regardless of ethnicity. 
                </p>
            </div>
        </div>

        <div className="stuff">
            <div className="stuff-image">
                <img src={process.env.PUBLIC_URL + "/images/mo-headshot.jpg"}
                        className='headshot-img' alt="Mo's Headshot"/>
            </div>
            <div className="stuff-info">
                <h3><b>Mo</b></h3>
                <p>Although new he is great with any hair type. 
                    He allows walk-ins
                    
                </p>
            </div>
        </div>

    </div>
  )
}

export default Stuff