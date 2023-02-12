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
                <p>
                    Our award winning barber, with over 9 years experience.
                    He is great with any hair type, regardless of ethnicity. 
                    He requires booking though the phone number below.
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
                <p>
                    Funny, charming and dedicated. He has been part of the team 
                    for a while, and he is very enthusiastic about his work. 
                    He can cut any hair type and will take his time to make sure 
                    you have the best fade in all of Bedford.

                </p>
            </div>
        </div>

    </div>
  )
}

export default Stuff