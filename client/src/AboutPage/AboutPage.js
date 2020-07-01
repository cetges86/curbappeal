import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import veggies from "../img/veggies-bg.jpeg";

const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <div className="banner">
        <h1 className="align-self-center display-4 lg-banner-txt">About Rheda Gardens</h1>
      </div>
      <section className="container" id="about">
        
        <div className="row my-3">
          <div className="col text-center">
            <p className="p-3 text-left m-3">
              As an optometrist with a particular concern about age-related ocular disease prevention, I prescribe diets rich in lutein, zeaxanthin & vitamin C. The 20/20 Garden™ set of 3 seed packets is an affordable way to grow a garden of foods rich in nutrition to prevent age-related eye disease. The varieties of seeds included are spinach, sweet red peppers and marigolds– all are easy to grow and are excellent sources of ocular nutrition. The unique and colorful seed packets clearly indicate the seed type including specific variety and planting instructions. In addition, 20/20 Garden™ seed packets include information about serving size and nutritional content. The 20/20 Garden™ - <i>Plant nutrition for your Vision</i>  combines my efforts to support nutrition to prevent age-related ocular disease with a product to easily grow your own ocular and vision superfoods!
            </p>
            
          </div>
          
        </div>
        <div className="row align-items-center">
          <img
            className="img-thumbnail col-md-auto"
            id="garden-img"
            alt="Curb Appeal Garden"
            src={veggies}
          />
          <div className="col">
            <p>
              During my practice, I have researched how food can contribute to
              macular (visual) health. For example, lutein and zeaxanthin are
              important nutrients found in leafy greens and yellow, orange and
              red bell peppers. Studies have shown these nutrients reduce the
              risk of eye diseases, including age-related macular degeneration
              and cataracts. When these nutrients are consumed, the body
              deposits them in the macula creating a protective layer of macular
              pigment. These protective antioxidants work to absorb the blue
              light we are exposed to daily. They also allow eyes to tolerate
              and recover from bright flashes of light as well as provide the
              ability to see objects more clearly in dim light.
              </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <a href="/garden">
              <button className="btn btn-primary">
                Learn More About 20/20 Garden
              </button>
            </a>
          </div>
          <div className="col">
            <a href="/store">
              <button className="btn btn-primary">
                Learn More About Curb Appeal by Rheda
              </button>
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutPage;
