import React from 'react'
import Navbar from '../../Navbar'
import Banner from '../Banner/Banner'
import Booking from '../Booking/Booking'
import Footer from '../Footer/Footer'
import Gallery from '../Gallery/Gallery'
import Services from '../Services/Services'
// import Stuff from '../Stuff/Stuff'

function Home() {
    return (
        <div>
            <Navbar />
            <Banner/>
            <Services/>
            <Gallery/>
            <Booking/>
            {/* <Stuff/> */}
            <Footer />
            
        </div>
    )
}

export default Home
