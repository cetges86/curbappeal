import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from "../Footer/Footer";
import venmo from "../img/venmo.png"
import mail from "../img/email.png"
import text from "../img/sms.png"

const Contact = () => {
    return (
        <div>
            <Navbar />

            <section id="intro">
                <div className="row">
                   <h1 id='small-banner'>Contact Me</h1>
                   <ul id="contact-list">
                       <li><img id="icon" src={mail}/><a target="blank" href="mailto:Rheda@me.com">Rheda@me.com</a></li>
                       <li><img id="icon" src={text}/>(303) 887.6557 - Text Preferred</li>
                       <li><img id="icon" src={venmo}/>Venmo - @Rheda-Gerlock</li>
                   </ul>

                </div>
            </section>
            <Footer />
        </div>
    )
}


export default Contact;