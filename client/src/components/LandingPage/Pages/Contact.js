import React from 'react'
import NavBar from '../Components/NavBar/NavBar'
import {Helmet} from "react-helmet";

import '../LandingPage.css'
import Footer from '../Components/Footer/Footer'
import ContactForm from '../Components/Contact/ContactForm';

const Contact = () => {
  return (
    <>
        <Helmet>
          <title>Contact | Convin</title>
          <meta name="description" content="Convin CRUD Application" />
        </Helmet>
    
        <NavBar/>
        <ContactForm/>
        <Footer/>
    </>
  )
}

export default Contact;
