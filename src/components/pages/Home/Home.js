import React from 'react'
import Navbar from '../../Navbar'
import Banner from '../Banner/Banner'
import Footer from '../Footer/Footer'
import Gallery from '../Gallery/Gallery'
import Services from '../Services/Services'

function Home() {
    return (
        <div>
            <Navbar />
            <Banner/>
            <Services/>
            <Gallery/>
            <Footer />
            
        </div>
    )
}

export default Home
