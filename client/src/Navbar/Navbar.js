import React, { Component } from 'react';
import logo from "../img/logo-transparent.png";

class Navbar extends Component {

    componentDidMount() {
        let myNav = document.getElementById('mynav');
        let myLogo = document.getElementById('mylogo');
        window.onscroll = function () {
            if (document.body.scrollTop || document.documentElement.scrollTop >= 500) {
                myNav.classList.add("nav-opaque");
                myLogo.classList.remove("hidden");
            }
            else {
                myNav.classList.remove("nav-opaque");
                myLogo.classList.add("hidden");
            }
        };
    }
    render() {
        return (
            <nav id="mynav" className="navbar sticky-top navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="/">
                    <img className="hidden" id="mylogo" src={logo} width="400" alt="20/20 Garden Logo" />
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
                            <a className="nav-link" href="/store">Store</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/curbappeal">Rheda Gardens</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/gallery">Image Gallery</a>
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