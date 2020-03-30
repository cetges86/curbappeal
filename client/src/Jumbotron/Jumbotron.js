import React, { Component } from 'react';

class Jumbotron extends Component {

    render() {
        return (
            <div className="jumbotron">
                <h1 id="small-banner" className="display-4">Welcome to 20/20 Garden</h1>
                <p className="lead">20/20 Garden™ - Plant nutrition for your vision.</p>
                <br/>
                <a className="btn btn-info btn-lg" href="/about" role="button">Learn More</a>
            </div>
        )
    }

}

export default Jumbotron;
