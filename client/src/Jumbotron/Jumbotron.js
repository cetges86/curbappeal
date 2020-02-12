import React, { Component } from 'react';

class Jumbotron extends Component {

    render() {
        return (
            <div className="jumbotron">
                <h1 className="display-4">Welcome to 20/20 Garden</h1>
                <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr className="my-4" />
                <a className="btn btn-info btn-lg" href="/" role="button">Learn more about Rheda</a>
            </div>
        )
    }

}

export default Jumbotron;
