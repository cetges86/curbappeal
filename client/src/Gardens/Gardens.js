import React, {Component} from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

class Gardens extends Component{


    render(){

        return(
            <div>
                <Navbar />
                <div className="banner">
        <h1 className="lg-banner-txt align-self-center display-4">20/20 Gardens™</h1>
      </div>
      <section className="container" id="intro">
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
       
      </section>

                <Footer />
            </div>
        )
    }

}

export default Gardens;