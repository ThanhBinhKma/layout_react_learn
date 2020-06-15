import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Home from './component/Home';
import Footer from './component/Footer';
import Sidebar from './component/Sidebar';
import Nav from './component/Nav';
class App extends Component {
  render() {
    return (
      <div id="wrapper">
        <Sidebar></Sidebar>
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
          <Nav></Nav>
          <Router>
            <Switch>
              <Route exact to="/">
                <Home></Home>
              </Route>
            </Switch>
          </Router>
          <Footer></Footer>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
