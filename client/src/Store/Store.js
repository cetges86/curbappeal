import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import veggies from "../img/veggies-bg.jpeg";
import cart from "../img/cart-icon.png"
import venmo from "../img/venmo.png"



class Store extends Component {

    state = {
        quantity: 0,
        email: "mailto:Rheda@me.com?subject=I'd like to buy some seeds!&body=Please let me know my total for my seed packets. Thank you.",
        name: ''
    }

    handleClick = () => {
        this.setState({ quantity: this.state.quantity += 1 });

        if (this.state.quantity > 0 && this.state.name != '') {
            this.switchButton(this.state.quantity, this.state.name);
        }

    }

    saveName = (event) => {
        console.log(event.target.value)
        const typedName = event.target.value;
        this.setState({ name: typedName });
        if (this.state.quantity > 0 && this.state.name != '') {
            this.switchButton(this.state.quantity, typedName);
        }
    }

    removeItems = () => {
        this.setState({
            quantity: 0,
            name: ''
        });
        const button = document.getElementById('confirm');
        const nameInput = document.getElementById('nameInput')
        button.disabled = true;
        nameInput.value = '';
    }

    switchButton = (quantity, name) => {
        const button = document.getElementById('confirm');
        if (quantity > 0 && name != '') {
            button.disabled = false;
            this.setState({ email: `mailto:Rheda@me.com?subject=${name} would like to buy Seed Packets from 20/20 Garden!&body=Please let me know my total for my ${quantity} seed packet(s). Thank you.` })
        }
    }

    render() {

        return (
            <div>
                <Navbar />

                <div className="banner">
                    <div className="row justify-content-lg-center align-items-center">
                        <h1 className="lg-banner-txt"> Welcome to the 20/20 Garden Store</h1>
                    </div>
                </div>
                <section id="intro">
                    <div className="row p-3">
                        <div className="col">
                            <img className="ml-3" alt="Curb Appeal Garden" src={veggies} />
                            <p id="label" className="text-center">Get your 20/20 Seed Packets today!</p>
                        </div>
                        <div className="col">
                            The 20/20 Garden store offers a set of 3 different seed packet collections, which will help get you started growing foods rich in nutrition to prevent age-related eye diseases.
                            The seed packets include the following:
                            <br /><br />
                            <ul>
                                <li>Spinach</li>
                                <li>Sweet Red Peppers</li>
                                <li>Marigolds</li>
                                <li>And More!</li>
                            </ul>

                            All of these are excellent sources of lutein and zeaxanthin, both are proven to help improve macular health and improve visual contrast and sharpness. All of these are also easy to grow, so you'll have you're own 20/20 Garden in no time. Included with seed packets are information about serving sizes, nutritional content and growing instructions.<br /><br />
                            To buy a seed packet or several seed packets, please add a few to your cart and provide your name. I'll get back to you with your total and I accept payment via Venmo:<br />
                            <div className="text-center">
                                <img id="icon" src={venmo} /><span id="venmo">@Rheda-Gerlock</span>
                            </div>
                        </div>
                    </div>
                    <div className="row text-center">
                        <div className='col'>
                            <div class="input-group input-group-sm mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="inputGroup-sizing-sm">Name</span>
                                </div>
                                <input id="nameInput" onChange={this.saveName} placeholder="Please enter name" type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                            </div>
                            <button className="btn btn-warning btn-lg" onClick={this.handleClick}>Add Seeds to Cart
                            </button>
                            <button className="btn btn-danger btn-lg" onClick={this.removeItems}>Clear
                            </button>
                        </div>
                        <div className='col'>

                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col">
                            <a href={this.state.email} target="_blank" rel="noopener noreferrer">
                                <button id="confirm" className="btn btn-success btn-lg btn-block" alt="Click to Email" disabled>{this.state.quantity} <img id='cart' src={cart} /> Send Email to Checkout</button></a>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        )
    }
}


export default Store;