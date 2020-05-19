import React from "react";
import Navbar from "../Navbar/Navbar";
import Jumbotron from "../Jumbotron/Jumbotron";
import Footer from "../Footer/Footer"
import garden from "../img/curbappeal1.jpeg";
import veggies from "../img/veggies-bg.jpeg";
import trunk from "../img/trunk.jpeg";
import spinach from "../img/spinach.png";
import bellpepper from "../img/bellpepper.png";
import marigold from "../img/marigold.png";

const MainPage = () => {
  return (
    <div className="bodyImage">
      <Navbar />
      <Jumbotron />
      <div className="container" id="intro">
        <div className="align-items-center p-2">
          <div className="col-lg-12">
            <h5 className="text-center">Hello and thank you for visiting Rheda Gardens! <br />

Here you’ll find information for purchasing 20/20 Garden™ Seed Packets <br />

Plant nutrition for your vision seed packets

and the many various gardening services  <br />

provided by Curb Appeal by Rheda.
              <br /></h5>
          </div>

          <div className="col-lg-12 text-center">
            <div className="row">
              <img className="col" src={spinach} />
              <img className="col" src={bellpepper} />
              <img className="col" src={marigold} />
            </div>
            {/* <img src={logo} alt="20/20 Garden Logo" /> */}
            {/* <img
              className="img-fluid"
              id="garden-img"
              alt="Curb Appeal Garden"
              src={garden}
            /> */}
          </div>


        </div>
        <hr />
        <div className="row my-3">
          <div className="col text-center">
            <p className="p-3 text-left m-3 frosted">
              As an optometrist with a particular concern about age-related ocular disease prevention, I prescribe diets rich in lutein, zeaxanthin & vitamin C. The 20/20 Garden™ set of 3 seed packets is an affordable way to grow a garden of foods rich in nutrition to prevent age-related eye disease. The varieties of seeds included are spinach, sweet red peppers and marigolds– all are easy to grow and are excellent sources of ocular nutrition. The unique and colorful seed packets clearly indicate the seed type including specific variety and planting instructions. In addition, 20/20 Garden™ seed packets include information about serving size and nutritional content. The 20/20 Garden™ - <i>Plant nutrition for your Vision</i> combines my efforts to support nutrition to prevent age-related ocular disease with a product to easily grow your own ocular and vision superfoods!
            </p>
            <a href="/store">
              <button className="btn btn-primary">
                Check out the store for seed packets!
              </button>
            </a>
          </div>
          {/* <img
            className="img-thumbnail col-md-auto"
            id="garden-img"
            alt="Curb Appeal Garden"
            src={veggies}
          /> */}
        </div>
        <div className="row my-2 pt-2">
          <img
            id="garden-img-vert"
            className="col-lg-4"
            alt="Curb Appeal Garden"
            src={trunk}
          />
          <div className="col">
            <h3 className="text-center m-3"> Curb Appeal by Rheda </h3>
            <p className="frosted col p-2 text-center">
              Be on the lookout for an orange Mini as it means

Curb Appeal by Rheda has arrived! <br />

I celebrate 35 years of optometry care this year and a couple years ago I started a gardening business to test - drive what my retirements plans might include. I’m a hobby gardener with no accreditation such as Master Gardener as it takes more time to attend the classes and fill the volunteer requirements than I currently have. My business, Curb Appeal by Rheda, specializes in helping seniors take care of the yards they created decades ago, but no longer have the strength, stamina or balance to care for. I also design and maintain the 2 raised bed areas at the MyEyeDr office at Colorado and Amherst. The bright colorful gardens attract lots of attention from the neighbors in this highly walkable neighborhood and I gather lots of compliments from them as they pass by. In addition, a real highlight for me are those that shout out drive - by compliments when they are stopped at the red light at this intersection.
Each project is unique and offers new opportunities! Whether you are looking for residential landscape design, landscape installation, landscape maintenance or have a commercial proposition, I welcome the opportunity to discuss your project.
Services include landscape design, spring clean up, soil amending, planting, setting up drip-irrigation lines, maintenance, fall clean-up and even holiday and spring botanical arrangements to provide curb appeal until it’s time to plant again!
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;
