import React from 'react';
import Navbar from '../Navbar/Navbar';
import Jumbotron from "../Jumbotron/Jumbotron";
import garden from "../img/curbappeal1.jpeg"

const CurbAppeal = () => {
    return (
        <div>
            <Navbar />
            <Jumbotron />
            <section id="intro">
                <div className="row align-items-center">
                    <img className="img-thumbnail col-md-auto" id="garden-img" alt="Curb Appeal Garden" src={garden} />
                    <p className="col">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam velit quam, maximus non nunc id, vulputate condimentum tortor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer scelerisque sollicitudin pulvinar. Quisque velit elit, commodo vel lorem quis, bibendum tempor eros. Maecenas faucibus ac dolor sit amet iaculis. Phasellus eget libero lacus. Praesent eget lacus ac lorem dignissim pretium. Morbi venenatis felis sed tempor ultrices.
    
Fusce mi quam, luctus eget orci quis, pharetra finibus sem. Nullam sed arcu eu mi finibus posuere nec aliquet orci. Duis convallis volutpat mauris. Duis eu tempus turpis, non convallis dui. Aliquam eget gravida metus. Praesent eget nisi justo. Donec risus nisl, tristique non blandit ullamcorper, vehicula a tortor. Cras mattis cursus imperdiet. Fusce purus elit, luctus quis urna nec, malesuada pulvinar dolor. In in gravida dolor. Nullam ac pharetra lorem. Nam sapien sem, dapibus sed urna id, dictum mattis felis. Aenean sed erat enim. Praesent porttitor enim vel vulputate pharetra. Quisque scelerisque scelerisque ipsum ac tempus. Aliquam gravida mauris ut sagittis accumsan.</p>

                </div>
            </section>
        </div>
    )
}


export default CurbAppeal;