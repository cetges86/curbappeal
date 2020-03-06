import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from "./MainPage/MainPage";
import AboutPage from "./AboutPage/AboutPage";
import CurbAppeal from "./CurbAppeal/CurbAppeal";
import ReactGallery from "./Gallery/React-Gallery";
import Store from "./Store/Store";
import Contact from "./Contact/Contact";


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/curbappeal" component={CurbAppeal} />
          <Route exact path="/gallery" component={ReactGallery} />
          <Route exact path="/store" component={Store} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Router>
    );
  }
}



export default App;
