import React, {useState} from 'react'
import './Gallery.css';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'
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
    const [current, setCurrent]= useState(0)
    const length = data.length
    
    const nextSlide=()=>{
        setCurrent(current==length-1 ? 0:current+1)
    }
    const prevSlide=()=>{
        setCurrent(current==0 ? length+1:current-1)
    }
    
    if(!Array.isArray(data) || data.length<=0){
        return null
    }
    console.log(current,length)






    return (
        <>
            <div className="banner-div">
                <img src={process.env.PUBLIC_URL + "/images/logo.jpg"}
                    className='banner' alt="main logo"/>
            </div>
            <section className="slider">
                <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide}/>
                {data.map((item,index)=>{ 
                    return(
                        <div className={index === current ? 'slide active ': 'slide'} key={index}>
                            
                            {index == current &&
                            (<img src={item.imgSrc} className="slider-images" alt="Gallery of past clientele" />
                            )}

                        </div>
                    )
                })}
                <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide}/>
            </section>
            {/* <div className="gallery">
                {data.map((item,index)=>{ 
                    return(
                        <div className="pics" key={index}>
                            <img src={item.imgSrc} className="pics-images" alt="Gallery of past clientele" />


                        </div>
                    )
                })}
            </div> */}
        </>
    )
}

export default Gallery
