import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer"
import butterfly from "../img/butterfly.jpg";
import curb2 from "../img/curb2.jpeg";
const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <div className="banner">
        <h1 className="align-self-center display-4 lg-banner-txt">About Rheda Gardens</h1>
      </div>
      <section className="container" id="about">
        <div className="row align-items-center">
          <img
          id="butterfly"
            className="col-md-5"
            alt="Butterfly"
            src={butterfly}
          />
          <div className="col">
            <h3 className="text-center">About 20/20 Garden</h3><br />
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
          <div className="col frosted">
            <p className="p-3">
              Studies have shown that participating in gardening as a child is
              an important contributor to attitudes and actions toward the
              environment as an adult. Just as importantly, access to nutritious
              affordable food is a key issue of our time. Our society
              increasingly relies on junk foods that are highly processed,
              contain too much salt and fat, and commonly sold as affordable
              fast food. But access to read food can start with gardening.
              <br />
              The 3000 sq. ft. <a target="_blank" href="https://www.childrenscolorado.org/about/news/2018/september-2018/new-community-garden/">Healthy Roots Community Garden</a> on the
              Anschutz Medical Campus of the Children’ s Hospital Colorado and
              the harvest it produces is used for a number of purposes
              including:
            </p>
            <ul>
              <li>
                Allowing for hands-on nutrition education and healthy eating/obesity prevention programs
              </li>
              <li>
                Enabling the hospital to launch a food prescription program and
                food pharmacy, allowing health care providers to “prescribe”
                healthy food instead of– or in addition to– medicine to patients/families struggling with obesity, diabetes and food security
              </li>
            </ul>
          </div>


        </div>
        <div className="col">
          <p>
            Colorful vegetables and edible flowers often also contain Vitamin C, an
            antioxidant, which lowers the risk of developing cataracts and
            when taken in combination with other essential nutrients, can slow
            the progression of age-related macular degeneration and the
            resultant visual acuity loss. Vitamin C also supports healthy
            ocular blood vessels.
            </p>
        </div>
        <div className="row m-3">
          <div className="col">
            <h4>Curb Appeal by Rheda</h4>
            <p >
              I happened into starting a gardening business in 2018 by offering to
              help an acquaintance with her corner lot flower bed spring clean-up
              while she was recuperating from back surgery. Once I started the
              project, we both realized there were many opportunities to add color
              and texture as well as minimize the upkeep of her landscape. While
              driving home one night, I drove by Colorado and Amherst to see the
              latest addition to the Vision Care Specialists office locations and
              was horrified by the weed overgrowth in the 2 raised bed planters. I
              was in contact with our CEO soon and informed him that I would clean
              up, plant and maintain those planters. Both of these gardens differ
              greatly from the small shade gardens I have at my residence. But
              I’ve come to love the color and vibrancy that perennials and annuals
              provide when planted in sunny locations.
          </p>

          </div>
          <img className="col-md-4 img-thumbnail" src={curb2} />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutPage;
