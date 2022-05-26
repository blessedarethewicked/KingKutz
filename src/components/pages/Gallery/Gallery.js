import React, {useState} from 'react'
import './Gallery.css';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'
<<<<<<< HEAD
// import { Carousel } from 'react-responsive-carousel';

=======
>>>>>>> 08aa3360ee511cec5aa82b455cb414cb194c15f1
function Gallery() {

    let data=[

<<<<<<< HEAD

        {
            id: 0,
            imgSrc: process.env.PUBLIC_URL + "/images/client2.jpg"
        },
        {
            id: 1,
            imgSrc: process.env.PUBLIC_URL + "/images/dexter-photo.jpg"
        },
        {
            id: 2,
            imgSrc: process.env.PUBLIC_URL + "/images/client1.jpg",
        },
        {
            id: 3,
            imgSrc: process.env.PUBLIC_URL + "/images/mk-mural.jpg"
        },
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
=======
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
>>>>>>> 08aa3360ee511cec5aa82b455cb414cb194c15f1
            imgSrc: process.env.PUBLIC_URL + "/images/client6.jpg"
        },
        {
            id: 7,
            imgSrc: process.env.PUBLIC_URL + "/images/client7.jpg"
        },
<<<<<<< HEAD
        {
            id: 8,
            imgSrc: process.env.PUBLIC_URL + "/images/client8.jpg"
        },
=======
>>>>>>> 08aa3360ee511cec5aa82b455cb414cb194c15f1

    ]
    const [current, setCurrent]= useState(0)
    const length = data.length
    
    const nextSlide=()=>{
<<<<<<< HEAD
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
=======
        setCurrent(current===length-1 ? 0:current+1)
    }
    const prevSlide=()=>{
        setCurrent(current===0 ? length+1:current-1)
    }

    const InitalSeconds = 10;
>>>>>>> 08aa3360ee511cec5aa82b455cb414cb194c15f1
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


<<<<<<< HEAD
=======




>>>>>>> 08aa3360ee511cec5aa82b455cb414cb194c15f1
    return (
        <>
            <section className="slider">
                <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide}/>
<<<<<<< HEAD

                <div className="imgs">
                        <img className='gallery-img' src={data[current].imgSrc} alt="client potfolio" />
                </div>
                

=======
                {data.map((item,index)=>{ 
                    return(
                        <div className={index === current ? 'slide active ': 'slide'} key={index}>
                            
                            {index === current &&
                            (<img src={item.imgSrc} className="slider-images" alt="Gallery of past clientele" />
                            )}

                        </div>
                    )
                })}
>>>>>>> 08aa3360ee511cec5aa82b455cb414cb194c15f1
                <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide}/>
            </section>

        </>
<<<<<<< HEAD

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
=======
>>>>>>> 08aa3360ee511cec5aa82b455cb414cb194c15f1
    )
}

export default Gallery
