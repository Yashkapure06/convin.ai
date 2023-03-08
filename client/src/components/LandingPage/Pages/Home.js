import React from 'react'
import NavBar from '../Components/NavBar/NavBar'
import HeroSection from '../Components/HeroSection/HeroSection'
import {Helmet} from "react-helmet";

import '../LandingPage.css'
import Footer from '../Components/Footer/Footer'
import JoinUs from '../Components/JoinUs/JoinUs';

const Home = () => {
  return (
    <>
        <Helmet>
          <title>Convin: CRUD Application</title>
          <meta name="description" content="Convin CRUD Application" />
        </Helmet>
        {/* This is navbar */}
        <NavBar/>

        {/* This is HeroSection */}
        <HeroSection/>

        {/* This is Features section */}
        {/* <Features /> */}

        {/* This is JoinUs section */}
        <JoinUs/>

        {/* This is Footer section */}
        <Footer/>
    </>
  )
}

export default Home;
