import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

// import Navbar from './components/Navbar';
// import Banner from './components/pages/Banner/Banner';
// import Footer from './components/pages/Footer/Footer';
// import Gallery from './components/pages/Gallery/Gallery';
// import Services from './components/pages/Services/Services';
import Home from './components/pages/Home/Home';
import PageNotFound from './components/pages/PageNotFound/PageNotFound';

// import Footer from './components/pages/Footer.js/Footer';
function App() {
  return (
    <Router>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='*' element={<PageNotFound/>}/>
      </Routes>
      {/* <Navbar />
      <Banner/>
      <Services/>
      <Gallery/>
      <Footer /> */}
    </Router>
  );
}

export default App;
