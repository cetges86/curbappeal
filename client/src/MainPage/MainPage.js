import React from 'react';
import Navbar from '../Navbar/Navbar';
import Jumbotron from "../Jumbotron/Jumbotron";
import garden from "../img/curbappeal1.jpeg"
import veggies from "../img/veggies-bg.jpeg"


const MainPage = () => {
    return (
        <div>
            <Navbar />
            <Jumbotron />
            <div className="bg-light" id="intro">
                <div className="row align-items-center">
                    <img className="img-thumbnail col-md-auto" id="garden-img" alt="Curb Appeal Garden" src={garden} />
                    <p className="col">Studies have shown that participating in gardening as a child is an important contributor to attitudes and actions toward the environment as an adult. Just as importantly, access to nutritious affordable food is a key issue of our time.  Our society increasingly relies on junk foods that are highly processed, contain too much salt and fat, and commonly sold as affordable fast food. But access to read food can start with gardening.


                        The 3000 square foot Healthy Roots Community Garden on the Anschutz Medical Campus of the Children’s Hospital Colorado and the harvest it produces is used for a number of purposes including:


                            <ul>
                            <li>
                                Allowing for hands-on nutrition education and healthy eating/obesity prevention programs</li>
                            <li>
                                Enabling the hospital to launch a food prescription program and food pharmacy, allowing health care providers to “prescribe” healthy food instead of – or in addition to – medicine to patients/families struggling with obesity, diabetes and food security</li>
                        </ul>
                        <br />

                    </p>
                </div>
                <div className="row">
                    <p className="col">As an optometrist with a particular concern about macular degeneration prevention, I fell that it’s time to “prescribe” healthy foods.  <br/>
                    The 20/20 Garden™ set of 3 seed packets is an affordable way to create a garden of foods rich in nutrition to prevent age-related eye disease.  The varieties of seeds included are spinach, sweet red peppers and marigolds – all are easy to grow and excellent sources of lutein and zeaxanthin.  The unique and colorful seed packets clearly indicate the seed type including variety, as well as expiration dates and planting instructions. In addition, 20/20  Garden™ seed packets include information about serving size and nutritional content. The 20/20 Garden™ - Plant nutrition for your Vision combines my efforts to support nutrition to prevent age-related ocular disease with a product to easily achieve better eating.</p>
                    <img className="img-thumbnail col-md-auto" id="garden-img" alt="Curb Appeal Garden" src={veggies} />

                </div>
            </div>
        </div >
    )
}


export default MainPage;