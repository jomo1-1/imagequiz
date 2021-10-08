import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import Home from "./components/home.component";
import { Nav, Navbar} from 'react-bootstrap'

function App() {
  return (<Router>
    <div className="App">
      <Navbar className="navbar navbar-expand-lg navbar-light fixed-top" expand="lg">
        <div className="container">


          <Link className="navbar-brand" to={"/home"}>&#127800; Flowers</Link>

          <div className="navbar-collapse" id="responsive-navbar-nav" aria-controls="basic-navbar-nav">

            <ul className="navbar-nav ml-auto">
            <li className="nav-item">

            <Link className="nav-link" to={"/home"}>Home</Link>

            </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
            </ul>

          </div>

        </div>

      </Navbar>
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;
