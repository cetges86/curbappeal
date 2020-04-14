import React, { Component } from 'react';
import logo from "../img/logo-transparent.png";

class Navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="/">
                    <img src={logo} width="400" alt="20/20 Garden Logo" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/curbappeal">Curb Appeal</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/gallery">Image Gallery</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/store">Store</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }

}

export default Navbar;