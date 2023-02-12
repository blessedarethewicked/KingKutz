import { Button } from '@material-ui/core'
import React from 'react'
import { useState } from 'react'
import './Services.css'



function Services() {

    let ServicesData = [
        {   
            ID:1,
            Title: "Basic Hair Cut",
            Discription: "A nice fresh hair cut; with or without a fade.",
            Price: 20
        },
        {   
            ID:2,
            Title: "hair Cut with Beards",
            Discription: "For our brothers blessed with a a beard we can give you a sick cut and the freshest facial hair.",
            Price:25
        },
        {   
            ID:3,
            Title: "Beards",
            Discription: "We can give you the best facial hair, whatever style you desire.",
            Price: 10
        },
        {   
            ID:4,
            Title: "Children",
            Discription: "We are very kid friendly and we will make sure that your young one has the best haircut at school the next day.", 
            Price:15
        },

    ]
    const [CurrentService, setCurrentService] = useState(0)
    const length = ServicesData.length

    const nextService=()=>{
        setCurrentService(CurrentService+1>=length ? 0:CurrentService+1)
    }
    const prevService=()=>{
        setCurrentService(CurrentService===0 ? length-1 :CurrentService-1)
    }

    return (
        <div className="services-Container">
            {/* A card which show the current service */}
            <div className='Service-Card-Container'>
                <div className="Service-Card-Title">{ServicesData[CurrentService].Title}</div>    
                <div className="Service-Card-Discription">{ServicesData[CurrentService].Discription}</div>
                <div className="Service-Card-Price">£{ServicesData[CurrentService].Price}</div>    
             </div>

            {/* Button to scroll through the services */}
            <div className="Service-Button-Container">
                {/* onClick={nextSlide} */}
                <div className="Service-Prev-Button-Container">
                    <div className='Service-Prev-Button' onClick={nextService}>Prev</div>
                </div>
                <div className="Service-Next-Button-Container">
                <div className='Service-Next-Button'  onClick={prevService}>Next</div>
                </div>
            </div>
        </div>
    )
}

export default Services
