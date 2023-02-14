import React, {useState} from 'react'
import './Gallery.css';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'
// import { Carousel } from 'react-responsive-carousel';

function Gallery() {

    let data=[

        {
            id: 0,
            imgSrc: process.env.PUBLIC_URL + "/images/mk-mural.jpg"
        },
        {   
            // change this
            id: 1,
            imgSrc: process.env.PUBLIC_URL + "/images/client1.jpg"
        },
        {
            // change this
            id: 2,
            imgSrc: process.env.PUBLIC_URL + "/images/client2.jpg"
        },
        // {
        //     id: 3,
        //     imgSrc: process.env.PUBLIC_URL + "/images/client3.jpg",
        // },
        {
            id: 4,
            imgSrc: process.env.PUBLIC_URL + "/images/client4.jpg"
        },
        {
            id: 5,
            imgSrc: process.env.PUBLIC_URL + "/images/client5.jpg"
        },
        {
            id: 6,
            imgSrc: process.env.PUBLIC_URL + "/images/client6.jpg"
        },
        {
            id: 7,
            imgSrc: process.env.PUBLIC_URL + "/images/client7.jpg"
        },
        {
            id: 8,
            imgSrc: process.env.PUBLIC_URL + "/images/client8.jpg"
        },
        {
            id: 9,
            imgSrc: process.env.PUBLIC_URL + "/images/client9.jpg"
        },
        {
            id: 10,
            imgSrc: process.env.PUBLIC_URL + "/images/client10.jpg"
        },
        {
            id: 11,
            imgSrc: process.env.PUBLIC_URL + "/images/client11.jpg"
        },
        {
            id: 12,
            imgSrc: process.env.PUBLIC_URL + "/images/client12.jpg"
        },
        {
            id: 13,
            imgSrc: process.env.PUBLIC_URL + "/images/client13.jpg"
        },
        {
            // change 13
            id: 14,
            imgSrc: process.env.PUBLIC_URL + "/images/client14.jpg"
        },
        {
            id: 15,
            imgSrc: process.env.PUBLIC_URL + "/images/client15.jpg"
        },
        {
            // change this
            id: 16,
            imgSrc: process.env.PUBLIC_URL + "/images/client16.jpg"
        },
        {
            id: 17,
            imgSrc: process.env.PUBLIC_URL + "/images/shop-background.jpg"
        },
        {
            id: 18,
            imgSrc: process.env.PUBLIC_URL + "/images/clippers.jpg"
        },

    ]
    const [current, setCurrent]= useState(0)
    const length = data.length
    
    const nextSlide=()=>{
        // console.log('old: '+current)
        setCurrent(current+1>=length ? 0:current+1)
        // console.log(current+1>=length ? 0:current+1)
    }
    const prevSlide=()=>{
        // console.log('old: '+current)
        setCurrent(current===0 ? length-1 :current-1)
        // console.log(current===0 ? length-1 :current-1)
    }

    const InitalSeconds = 200;
    const [seconds, setSeconds] = useState(InitalSeconds);

    React.useEffect(() => {
      if (seconds > 0) {
        setTimeout(() => setSeconds(seconds - 1), 1000);
      } else {
        setSeconds(0);
      }
    },[seconds]);

    if(seconds===0){
        nextSlide()
        setSeconds(InitalSeconds)
    }

    
    if(!Array.isArray(data) || data.length<=0){
        return null
    }


    return (
        <>
            <section className="slider">
                <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide}/>

                <div className="imgs">
                        <img className='gallery-img' src={data[current].imgSrc} alt="client potfolio" />
                </div>
                

                <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide}/>
            </section>

        </>

        // <div className="carousel-wrapper">
        //     <Carousel infiniteLoop useKeyboardArrows autoPlay >
        //         <div>
        //             <img src={process.env.PUBLIC_URL + "/images/client2.jpg"}/>
        //         </div>
        //         <div>
        //             <img src={process.env.PUBLIC_URL + "/images/dexter-photo.jpg"}/>
        //         </div>
        //         <div>
        //             <img src={process.env.PUBLIC_URL + "/images/client1.jpg"}/>
        //         </div>
        //         <div>
        //             <img src={process.env.PUBLIC_URL + "/images/mk-mural.jpg"}/>
        //         </div>
        //         <div>
        //             <img src={process.env.PUBLIC_URL + "/images/client4.jpg"}/>
        //         </div>
        //         <div>
        //             <img src={process.env.PUBLIC_URL + "/images/client5.jpg"}/>
        //         </div>
        //         <div>
        //             <img src={process.env.PUBLIC_URL + "/images/client6.jpg"}/>
        //         </div>
        //         <div>
        //             <img src={process.env.PUBLIC_URL + "/images/client7.jpg"}/>
        //         </div>
        //         <div>
        //             <img src={process.env.PUBLIC_URL + "/images/client8.jpg"}/>
        //         </div>

        //     </Carousel>
        // </div>
    )
}

export default Gallery
