import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import curb1 from "../img/curb1.jpeg";
import curb2 from "../img/curb2.jpeg";
import trunk from "../img/trunk.jpeg";


const CurbAppeal = () => {
  return (
    <div>
      <Navbar />
      <div className="banner">
        <h1 className="lg-banner-txt align-self-center display-4">Curb Appeal by Rheda</h1>
      </div>
      <section className="container" id="intro">
      <div className="row my-2 pt-2">
          <img
            id="garden-img-vert"
            className="col-lg-4"
            alt="Curb Appeal Garden"
            src={trunk}
          />
          <div className="col">
            {/* <h3 className="text-center m-3"> Curb Appeal by Rheda </h3> */}
            <p className="frosted col p-2 text-center">
              Be on the lookout for an orange Mini as it means

            Curb Appeal by Rheda has arrived! <br />

                I celebrate 35 years of optometry care this year and a couple years ago I started a gardening business to test - drive what my retirements plans might include. I’m a hobby gardener with no accreditation such as Master Gardener as it takes more time to attend the classes and fill the volunteer requirements than I currently have. My business, Curb Appeal by Rheda, specializes in helping seniors take care of the yards they created decades ago, but no longer have the strength, stamina or balance to care for. I also design and maintain the 2 raised bed areas at the MyEyeDr office at Colorado and Amherst. The bright colorful gardens attract lots of attention from the neighbors in this highly walkable neighborhood and I gather lots of compliments from them as they pass by. In addition, a real highlight for me are those that shout out drive - by compliments when they are stopped at the red light at this intersection.
                Each project is unique and offers new opportunities! Whether you are looking for residential landscape design, landscape installation, landscape maintenance or have a commercial proposition, I welcome the opportunity to discuss your project.
                Services include landscape design, spring clean up, soil amending, planting, setting up drip-irrigation lines, maintenance, fall clean-up and even holiday and spring botanical arrangements to provide curb appeal until it’s time to plant again!
            </p>
          </div>
        </div>
      
        <div className="row align-items-center">
          <img className="img-thumbnail col-md-auto" id="garden-img" alt="Curb Appeal Garden" src={curb1} />
          <div className="col">
            <h5>
              Affordable landscape help for your home or business - Transform your
              space to be the envy of the neighborhood
          </h5>
            <p className="col">
              Email me to explain your landscape needs and wants:&nbsp;
              <a href="mailto:rheda@me.com">Rheda@me.com</a>
              <br />
              Rheda of Curb Appeal by Rheda will work with you to create a
              landscape that is within your budget and schedule. The initial
              landscape design consultation and site assessment is a one hour
              assessment of your landscape to determine goals and objectives,
              discuss design elements and any possible limitations. A written
              summary follows in 2-4 weeks and includes: what your vision is; your
              ideas for what you want to do; plant suggestions; recommended
              priorities of what should be done and when; and a simple sketch or
              pictures of suggested plants. A design presentation can be scheduled
              to review the written summary.
          </p>
          </div>
        </div>
        <div>
          <p className="frosted">
            Landscape Maintenance Programs include the following services with a
            lot of attention to detail and can be customized to fit your needs:
            <br />
            Landscape Maintenance: bed and border weed care; mulch care; shrub
            trimming and shaping; soil amendments; spring and fall planting of
            both perennial and annual flower beds and pots; drip-line irrigation
            lines; Japanese beetle mitigation.
            <br />
            Seasonal Clean-Up - Spring and Fall Leaf removal or mulching; shrub
            trimming and shaping; and weed care.
            <br />
            Once Curb Appeal by Rheda is hired for your landscape needs,
            schedules and billing will be determined.
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
        <div className="d-flex flex-row-reverse">
        <a href="/gallery"><button className="btn btn-info">Visit the Image Gallery to see the results</button></a>

        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CurbAppeal;
