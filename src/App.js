import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';

import Navbar from './components/Navbar';
import Banner from './components/pages/Banner/Banner';
import Footer from './components/pages/Footer/Footer';
import Gallery from './components/pages/Gallery/Gallery';
import Services from './components/pages/Services/Services';

// import Footer from './components/pages/Footer.js/Footer';
function App() {
  return (
    <Router>
      <Navbar />
      <Banner/>
      <Services/>
      <Gallery/>
      <Footer />
    </Router>
  );
}

export default App;
