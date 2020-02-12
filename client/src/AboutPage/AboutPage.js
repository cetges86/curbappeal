import React from 'react';
import Navbar from '../Navbar/Navbar';
// import Jumbotron from "../Jumbotron/Jumbotron";
import portrait from "../img/portrait.jpeg"
const AboutPage = () => {
    return (
        <div>
            <Navbar />
            <h1 className="text-center">About Me</h1>
            <section className="container">
                <div className="row align-items-center">
                    <img className="img-thumbnail col-md-auto" alt="Rheda Portrait" src={portrait} />
                    <p className="col">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam velit quam, maximus non nunc id, vulputate condimentum tortor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer scelerisque sollicitudin pulvinar. Quisque velit elit, commodo vel lorem quis, bibendum tempor eros. Maecenas faucibus ac dolor sit amet iaculis. Phasellus eget libero lacus. Praesent eget lacus ac lorem dignissim pretium. Morbi venenatis felis sed tempor ultrices.
    
Fusce mi quam, luctus eget orci quis, pharetra finibus sem. </p>

                </div>
            </section>
        </div>
    )
}


export default AboutPage;