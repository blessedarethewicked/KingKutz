import React from 'react'
// import { useEffect } from 'react';
import { useState } from 'react';
import './Booking.css';

export default function Booking() {
    const [BookingPageFlag, setBookingPageFlag] = useState(false)
    const [Name, setName] = useState("")
    const [PhoneNumber, setPhoneNumber] = useState(0)
    const [Email, setEmail] = useState("")
    const [Date, setDate] = useState("")
    const [Time, setTime] = useState("")


    // useEffect(() => {
    //     setBookingPageFlag(false)
    // })
    // console.log(BookingPageFlag)
    const ConfirmButtonHandler=()=>{
        console.log({Name,PhoneNumber,Email})
    }

    if (BookingPageFlag){
        console.log('booking page flag is true')
        return(
            <div className='Booking-Page-Container'>
                <div className="Booking-Page">
                    <div className="Input-Form-Container">
                        <div className="Input-Name">
                            <div className="Input-Form-label">
                                Name
                            </div>
                            <input type ="text" placeholder='Name..' onInput={e=>setName(e.target.value)}/>
                        </div>
                        <div className="Input-PhoneNumber">
                            <div className="Input-Form-label">
                                Phone Number
                            </div>
                            <input  type ="text" placeholder='Phone Number' onInput={e=>setPhoneNumber(e.target.value)}/>
                        </div>

                        <div className="Input-Email">
                            <div className="Input-Form-label">
                            Email
                            </div>
                            <input type ="text" placeholder='Email' onInput={e=>setEmail(e.target.value)}/>
                        </div>

                        <div className="Input-Date">
                            <div className="Input-Form-label">
                            Date
                            </div>
                            {/* <input type ="text" placeholder='Date' /> */}
                            <div className="Date-Card-container">
                                <div className="Date-Card">
                                    date card
                                </div>
                            </div>
                        </div>

                        <div className="Input-Time">
                            <div className="Input-Form-label">
                            Time
                            </div>
                            <div className="Time-Card-Container">
                                <div className="Time-Card">
                                    time card
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="Confirm-Button-Container">
                        <div className="Confirm-Button" onClick={()=>ConfirmButtonHandler()}>
                            Confirm
                        </div>
                    </div>
                    <div className="Cancel-Booking-Button-Container">
                        <div className="Cancel-Booking-Button" onClick={()=>setBookingPageFlag(false)}>
                            Cancel
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else{
        console.log('booking page flag is true')
        return (
          <div className='Booking-Card-Container'>
              <div className="Booking-Button-Container">
                  <div className="Booking-Button" onClick={()=>setBookingPageFlag(true)}>
                  Book now    
                  </div>
              </div>    
          </div>
        )
    }
}
