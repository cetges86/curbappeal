import React, { Component } from 'react';
import logo from "../img/logo-no-banner.png";

class Jumbotron extends Component {

    render() {
        return (
            <div className="jumbotron">
                {/* <h1 id="small-banner" className="display-4"></h1> */}
                <img id="jumbo-logo" src={logo}/>
                <h3 id="jumbo-banner" className="display-5">Plant nutrition <span style={{color:"white"}}>for your vision.</span></h3>
                <br/>
                {/* <button className="btn btn-lg" role="button">Scroll Down to Learn More</button> */}
            </div>
        )
    }

}

export default Jumbotron;
