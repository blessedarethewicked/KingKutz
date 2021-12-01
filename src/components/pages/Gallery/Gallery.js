import React from 'react'
import './Gallery.css';
function Gallery() {

    let data=[

        // {
        //     id: 1,
        //     imgSrc: process.env.PUBLIC_URL + "/images/logo.jpg"
        // },

        {
            id: 1,
            imgSrc: process.env.PUBLIC_URL + "/images/client2.jpg"
        },
        {
            id: 2,
            imgSrc: process.env.PUBLIC_URL + "/images/dexter-photo.jpg"
        },
        {
            id: 3,
            imgSrc: process.env.PUBLIC_URL + "/images/client1.jpg",
        },
        {
            id: 4,
            imgSrc: process.env.PUBLIC_URL + "/images/mk-mural.jpg"
        },
        {
            id: 5,
            imgSrc: process.env.PUBLIC_URL + "/images/client4.jpg"
        },
        {
            id: 6,
            imgSrc: process.env.PUBLIC_URL + "/images/client5.jpg"
        },
        {
            id: 7,
            imgSrc: process.env.PUBLIC_URL + "/images/client6.jpg"
        },
        {
            id: 7,
            imgSrc: process.env.PUBLIC_URL + "/images/client7.jpg"
        },

    ]
    return (
        <>
            <div>
                <img src={process.env.PUBLIC_URL + "/images/logo.jpg"}
                    className='banner'/>
            </div>
            <div className="gallery">
                {data.map((item,index)=>{ 
                    return(
                        <div className="pics" key={index}>
                            <img src={item.imgSrc} className="pics-images" />


                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Gallery
