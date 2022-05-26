import React from 'react'
import "./Banner.css"

function Banner() {
    return (
        <div className="banner-div">
            <img src={process.env.PUBLIC_URL + "/images/new-background.jpg"}
                className='banner' alt="main logo"/>
        </div>
    )
}

export default Banner
