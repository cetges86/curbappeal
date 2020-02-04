import React, { Component } from 'react';

class Navbar extends Component {

    render() {
        return (
            <div>
                <ul className="nav nav-tabs mb-3 justify-content-end" id="pills-tab" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Store</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</a>
                    </li>
                </ul>
            </div>
        )
    }

}

export default Navbar;