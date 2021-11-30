import React from "react";
import "./App.css";
import Profileinfo from "./component/profile-info";
import Home from "./component/Home";

import PersonIcon from "@material-ui/icons/Person";
import IconButton from "@material-ui/core/IconButton";
import ForumIcon from "@material-ui/icons/Forum";
import Settings from "./component/Settings";
import Media from "./component/Add";
import Edit from "./component/edit-media";
// import Login from "./component/login-model"
// import Header from "./component/Header";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      {/* <Login /> */}

      <div className="App">
        <header>
          <div>
            <div className="header">
              <IconButton>
                <Link to="/profile-info">
                  <PersonIcon fontSize="large" className="header-icon" />
                </Link>
              </IconButton>

              <Link to="/">
                <img
                  className="header-logo"
                  fontSize="large"
                  src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-logo.jpg"
                  alt=""
                />{" "}
              </Link>
              <IconButton>
                <ForumIcon fontSize="large" className="header-icon" />
              </IconButton>
            </div>
          </div>
        </header>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/profile-info">
            <Profileinfo />
          </Route>
          <Route exact path="/profile-info/settings">
            <Settings />
          </Route>
          <Route exact path="/profile-info/media">
            <Media />
          </Route>

          <Route exact path="/profile-info">
            <Profileinfo />
          </Route>
          <Route exact path="/profile-info">
            <Profileinfo />
          </Route>

          <Route exact path="/profile-info/Edit">
            <Edit />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
