import React from "react";
import Navbar from "../Navbar/Navbar";
import Jumbotron from "../Jumbotron/Jumbotron";
import Footer from "../Footer/Footer"
import spinach from "../img/spinach.png";
import bellpepper from "../img/bellpepper.png";
import marigold from "../img/marigold.png";

const MainPage = () => {
  return (
    <div className="bodyImage">
      <Navbar />
      <Jumbotron />
      <section className="container" id="intro">
        <div className="align-items-center p-2">
          <div className="col-lg-12">
            <h5 className="text-center">Hello and thank you for visiting Rheda Gardens! <br />

Here you’ll find information for purchasing 20/20 Garden™ Seed Packets <br />

Plant nutrition for your vision seed packets<br/>

and the many various gardening services  <br />

provided by Curb Appeal by Rheda.
              <br /></h5>
          </div>

          <div className="col-lg-12 text-center">
            <div className="row">
              <img className="col-lg-4" src={spinach} />
              <img className="col-lg-3" src={bellpepper} />
              <img className="col-lg-4" src={marigold} />
            </div>
        <a href="/about"><button className="btn btn-info">Learn More</button></a>
          </div>

        </div>
        
      </section>
      <Footer />
    </div>
  );
};

export default MainPage;
