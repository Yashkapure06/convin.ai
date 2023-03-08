import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
const Footer = () => {
    return (
        <footer>
            <div  className="row primary">
                <div className="column about">

                    <h3> <span>Convin.</span></h3>

                    <p>
                        Your Best secure Notes, Video.<br/>

                    </p>


                    <div className="social">
                        <a href="#test"><i className="fa-brands fa-youtube-square"></i></a>
                        <a href="#test"><i className="fa-brands fa-facebook-square"></i></a>
                        <a href="#test"><i className="fa-brands fa-twitter-square"></i></a>
                        <a href="#test"><i className="fa-brands fa-github-square"></i></a>
                    </div>

                </div>

                <div className="column links">
                    <h3>Soon..</h3>

                    <ul className='ul'>

                        <li>
                            <a href="#faq">Soon..</a>
                        </li>
                        <li>
                            <a href="#cookies-policy">Soon..</a>
                        </li>
                        <li>
                            <a href="#terms-of-services">Soon..</a>
                        </li>
                        <li>
                            <a href="#support">Soon..</a>
                        </li>
                    </ul>

                </div>


                <div className="column links">
                    <h3>Soon..</h3>
                    <ul className='ul'>
                        <li>
                            <a href="#faq">Soon..</a>
                        </li>
                        <li>
                            <a href="#cookies-policy">Soon..</a>
                        </li>
                        <li>
                            <a href="#terms-of-services">Soon..</a>
                        </li>
                        <li>
                            <a href="#support">Soon..</a>
                        </li>
                    </ul>
                </div>

                <div className="column subscribe">
                    <h3>Newsletter</h3>
                    <div>
                        <form>
                            <input className="input" type="email" placeholder="Your email id here" required />
                            <button>Subscribe</button>
                        </form>
                        
                    </div>

                </div>

            </div>

            <div className="row copyright">
                {/* <div className="footer-menu">
                </div> */}
                <p>Copyright &copy; 2023 | Convin by Yash Kapure </p>
            </div>
        </footer>
    );
};

export default Footer;
