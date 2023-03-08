import React from 'react'
import Navbar from '../LandingPage/Components/NavBar/NavBar'
import Footer from '../LandingPage/Components/Footer/Footer'
// import './ErrorPage.css'
import errorImg from '../../assets/error404.png'
import {Link} from 'react-router-dom'
import {Helmet} from "react-helmet";
import styles from './styles';

const ErrorPage = () => {
  return (
    <>
      <Helmet>
        <title>Interview | Error 404 Not Found</title>
        <meta name="description" content="Interview. The page your looking for was not found." />
      </Helmet>
    <Navbar/>
    <div style={styles.errorpage_container}>
        <img style={styles.error_banner} src={errorImg} alt="404 error" />
        <h2 style={styles.h2}>404 Error<br/> Page Not Found!</h2>  
        <p style={styles.p}>Go back to </p><Link to="/"><button style={styles.button}>Home</button> </Link>
    </div>
    <Footer/> 
    </>
  )
}

export default ErrorPage;