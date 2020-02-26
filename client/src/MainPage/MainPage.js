import React from "react";
import Navbar from "../Navbar/Navbar";
import Jumbotron from "../Jumbotron/Jumbotron";
import garden from "../img/curbappeal1.jpeg";
import veggies from "../img/veggies-bg.jpeg";
import trunk from "../img/trunk.jpeg";

const MainPage = () => {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <div className="bg-light" id="intro">
        <div className="row align-items-center">
          <img
            className="img-thumbnail col-md-auto"
            id="garden-img"
            alt="Curb Appeal Garden"
            src={garden}
          />
          <div className="col">
            <h3 className="text-center"> 20 / 20 Garden </h3>
            <p className="p-3 m-3">
              Studies have shown that participating in gardening as a child is
              an important contributor to attitudes and actions toward the
              environment as an adult.Just as importantly, access to nutritious
              affordable food is a key issue of our time. Our society
              increasingly relies on junk foods that are highly processed,
              contain too much salt and fat, and commonly sold as affordable
              fast food. But access to read food can start with gardening.
              <br />
              The 3000 square foot Healthy Roots Community Garden on the
              Anschutz Medical Campus of the Children’ s Hospital Colorado and
              the harvest it produces is used for a number of purposes
              including:
              <br />
            </p>
            <ul>
              <li>
                Allowing for hands - on nutrition education and healthy eating /
                obesity prevention programs
              </li>
              <li>
                Enabling the hospital to launch a food prescription program and
                food pharmacy, allowing health care providers to“ prescribe”
                healthy food instead of– or in addition to– medicine to patients
                / families struggling with obesity, diabetes and food security
              </li>
            </ul>
          </div>
        </div>
        <div className="row my-3">
          <div className="col text-center">
            <p className="p-3 text-left m-3">
              As an optometrist with a particular concern about macular
              degeneration prevention, I fell that it’s time to prescribe
              healthy foods. <br />
              The 20 / 20 Garden™ set of 3 seed packets is an affordable way to
              create a garden of foods rich in nutrition to prevent age -
              related eye disease.The varieties of seeds included are spinach,
              sweet red peppers and marigolds– all are easy to grow and
              excellent sources of lutein and zeaxanthin.The unique and colorful
              seed packets clearly indicate the seed type including variety, as
              well as expiration dates and planting instructions.In addition,
              20/20 Garden™ seed packets include information about serving size
              and nutritional content.The 20/20 Garden™ - Plant nutrition for
              your Vision combines my efforts to support nutrition to prevent
              age - related ocular disease with a product to easily achieve
              better eating.
            </p>
            <a href="/store">
              <button className="btn btn-primary">
                Check out the store for seed packets!
              </button>
            </a>
          </div>
          <img
            className="img-thumbnail col-md-auto"
            id="garden-img"
            alt="Curb Appeal Garden"
            src={veggies}
          />
        </div>
        <div className="row my-3 pt-3">
          <img
            id="garden-img-vert"
            className="img-thumbnail col"
            alt="Curb Appeal Garden"
            src={trunk}
          />
          <div className="col">
            <h3 className="text-center"> Curb Appeal by Rheda </h3>
            <p className="col p-2 m-3">
              I celebrate 35 years of optometry care this year and a couple
              years ago I started a gardening business to test - drive what my
              retirements plans might include. I’m a hobby gardener with no
              accreditation such as Master Gardener as it takes more time to
              attend the classes and fill the volunteer requirements than I
              currently have. My business, Curb Appeal by Rheda, specializes in
              helping seniors take care of the yards they created decades ago,
              but no longer have the strength, stamina or balance to care for. I
              also designed and maintain the 2 raised bed areas at the MyEyeDr
              office at Colorado and Amherst. The bright colorful gardens attract
              lots of attention from the neighbors in this highly walkable
              neighborhood and I gather lots of compliments from them as they
              pass by. In addition, a real highlight for me are those that shout
              out drive - by compliments when they are stopped at the red light
              at this intersection. <br />
              Each project is unique and offers new opportunities! Whether you
              are looking for residential landscape design, landscape
              installation, landscape maintenance or have a commercial
              proposition, I welcome the opportunity to discuss your project.
              <br />
              Services include landscape design, spring clean up, soil amending,
              planting, setting up drip - irrigation lines, maintenance and fall
              clean-up.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
