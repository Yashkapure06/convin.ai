import React from "react";
import { Link } from "react-router-dom";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div data-aos="fade-up" className="hero-circle">
        <svg viewBox="0 0 1194 1192" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.2"><circle cx="596" cy="596" r="594.5" stroke="url(#paint0_linear_1147_785)" stroke-width="3"></circle><circle cx="64" cy="335" r="10" fill="url(#paint1_linear_1147_785)"></circle><circle cx="187" cy="1029" r="10" fill="url(#paint2_linear_1147_785)"></circle><circle cx="1184" cy="684" r="10" fill="url(#paint3_linear_1147_785)"></circle></g><defs><linearGradient id="paint0_linear_1147_785" x1="27.8649" y1="603.544" x2="1201.29" y2="603.544" gradientUnits="userSpaceOnUse"><stop stop-color="#4CA5FF"></stop><stop offset="1" stop-color="#B673F8"></stop></linearGradient><linearGradient id="paint1_linear_1147_785" x1="54.4675" y1="335.127" x2="74.1558" y2="335.127" gradientUnits="userSpaceOnUse"><stop stop-color="#4CA5FF"></stop><stop offset="1" stop-color="#B673F8"></stop></linearGradient><linearGradient id="paint2_linear_1147_785" x1="177.468" y1="1029.13" x2="197.156" y2="1029.13" gradientUnits="userSpaceOnUse"><stop stop-color="#4CA5FF"></stop><stop offset="1" stop-color="#B673F8"></stop></linearGradient><linearGradient id="paint3_linear_1147_785" x1="1174.47" y1="684.127" x2="1194.16" y2="684.127" gradientUnits="userSpaceOnUse"><stop stop-color="#4CA5FF"></stop><stop offset="1" stop-color="#B673F8"></stop></linearGradient></defs></svg>
      </div>
      <div>
        <div data-aos="fade-up" className="container flex">
          <h1 style={{ padding: 0,backgroundColor: 'transparent'  }}>
            Your Best Secure<br/>
            <span className="text-gradient">
              
              Convin CRUD Application
            </span>
          </h1>
          {/* 2190FF */}
          <h4>
            Keep your Notes, Video Safe by using Convin CRUD Application
          </h4>
          <Link to="/signup">
            <button>Get Started</button>
          </Link>
          <div className="image flex">
        </div>
        </div>
        {/* <div className="hero-circle2">
          <svg viewBox="0 0 1194 1192" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.2"><circle cx="596" cy="596" r="594.5" stroke="url(#paint0_linear_1147_785)" stroke-width="3"></circle><circle cx="64" cy="335" r="10" fill="url(#paint1_linear_1147_785)"></circle><circle cx="187" cy="1029" r="10" fill="url(#paint2_linear_1147_785)"></circle><circle cx="1184" cy="684" r="10" fill="url(#paint3_linear_1147_785)"></circle></g><defs><linearGradient id="paint0_linear_1147_785" x1="27.8649" y1="603.544" x2="1201.29" y2="603.544" gradientUnits="userSpaceOnUse"><stop stop-color="#4CA5FF"></stop><stop offset="1" stop-color="#B673F8"></stop></linearGradient><linearGradient id="paint1_linear_1147_785" x1="54.4675" y1="335.127" x2="74.1558" y2="335.127" gradientUnits="userSpaceOnUse"><stop stop-color="#4CA5FF"></stop><stop offset="1" stop-color="#B673F8"></stop></linearGradient><linearGradient id="paint2_linear_1147_785" x1="177.468" y1="1029.13" x2="197.156" y2="1029.13" gradientUnits="userSpaceOnUse"><stop stop-color="#4CA5FF"></stop><stop offset="1" stop-color="#B673F8"></stop></linearGradient><linearGradient id="paint3_linear_1147_785" x1="1174.47" y1="684.127" x2="1194.16" y2="684.127" gradientUnits="userSpaceOnUse"><stop stop-color="#4CA5FF"></stop><stop offset="1" stop-color="#B673F8"></stop></linearGradient></defs></svg>
        </div> */}
        

      </div>
    </section>
  );
};

export default HeroSection;
