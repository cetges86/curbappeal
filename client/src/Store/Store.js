import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import veggies from "../img/veggies-bg.jpeg";
import seed from "../img/seed-packet.jpg";


const Store = () => {
    return (
        <div>
            <Navbar />

            <section id="intro">
                <div className="row justify-content-lg-center align-items-center">
                    <h1 id="small-banner"> Welcome to the 20/20 Garden Store</h1>
                </div>
                <div className="row p-3">
                    <div className="col">
                        <img className="ml-3" alt="Curb Appeal Garden" src={veggies} />
                        {/* <p className="text-center">Get your 20/20 Seed Packet today<p> */}
                    </div>
                    <p className="col">
                        The 20/20 Garden store offers a set of 3 different seed packet collections, which will help get you started growing foods rich in nutrition to prevent age-related eye diseases.
                        The seed packets include the following:
                        <ul>
                            {/* <li><img src={seed}/></li> */}
                            <li>Spinach</li>
                            <li>Sweet Red Peppers</li>
                            <li>Marigolds</li>
                            <li>And More!</li>
                        </ul>
                        All of these are excellent sources of lutein and zeaxanthin, both are proven to help improve macular health and improve visual contrast and sharpness. All of these are also easy to grow, so you'll have you're own 20/20 Garden in no time. Included with seed packets are information about serving sizes, nutritional content and growing instructions.<br/>
                        To buy a seed packet or several seed packets, please email me at Rheda@me.com or send money via Venmo to 
                    </p>
                </div>
                <div className="row">
                <button>Buy Seeds Now</button>
                </div>
            </section>
            <Footer />
        </div>
    )
}


export default Store;