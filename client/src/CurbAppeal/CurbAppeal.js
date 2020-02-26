import React from "react";
import Navbar from "../Navbar/Navbar";

const CurbAppeal = () => {
  return (
    <div>
      <Navbar />
      <section id="intro">
        <div className="row align-items-center">
          {/* <img className="img-thumbnail col-md-auto" id="garden-img" alt="Curb Appeal Garden" src={garden} /> */}
          <h1>Curb Appeal by Rheda</h1>
          </div>
          <div>
          <h4>
            Affordable landscape help for your home or business - <br/>transform your
            space to be the envy of the neighborhood
          </h4>
          <p className="frosted col">
            Email me to explain your landscape needs and wants:{" "}
            <a href={"mailto:" + "rheda@me.com"}>Rheda@me.com</a>
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
          <p className="frosted">
            Landscape Maintenance Programs include the following services with a
            lot of attention to detail and can be customized to fit your needs:
            <br />
            Landscape Maintenance: bed and border weed care; mulch care; shrub
            trimming and shaping; soil amendments; spring and fall planting of
            both perennial and annual flower beds and pots; drip-line irrigation
            lines;
            <br />
            Japanese beetle mitigation.
            <br />
            Seasonal Clean-Up - Spring and Fall Leaf removal or mulching; shrub
            trimming and shaping; and weed care.
            <br />
            Once Curb Appeal by Rheda is hired for your landscape needs,
            schedules and billing will be determined.
          </p>
        </div>
      </section>
    </div>
  );
};

export default CurbAppeal;
