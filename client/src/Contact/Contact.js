import React from 'react';
import Navbar from '../Navbar/Navbar';
import Jumbotron from "../Jumbotron/Jumbotron";
import garden from "../img/curbappeal1.jpeg"

const Contact = () => {
    return (
        <div>
            <Navbar />

            <section id="intro">
                <div className="row">
                   <h1>Contact Me</h1>
                   <ul>
                       <li>Rheda@me.com</li>
                       <li>303.887.6557 - Text Preferred</li>
                   </ul>

                </div>
            </section>
        </div>
    )
}


export default Contact;