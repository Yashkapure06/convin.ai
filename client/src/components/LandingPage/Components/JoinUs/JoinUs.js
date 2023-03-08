import React from "react";
import styles from "./styles";
import './JoinUs.css';
const JoinUs = () => {
  return (
    <section className="joinus-section"  style={styles.main}>
        <div>
        <div data-aos="fade-up" className="container flex">
                <h1> 
                    <span className="text-gradient">Create your first</span> Note Today<br />
                    <span className="text-gradient"> Totally Free 
                    </span>
                </h1>
            </div>
        </div>
    </section>
  );
};

export default JoinUs;
