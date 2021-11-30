import { BrowserRouter as Router, Link } from "react-router-dom";

import React from "react";
import "./style.css";
import PersonIcon from "@material-ui/icons/Person";
import IconButton from "@material-ui/core/IconButton";
import ForumIcon from "@material-ui/icons/Forum";

function Header() {
  return (
    <Router>
      <div>
        <div className="header">
          <IconButton>
            <Link to="/profile-info">
              <PersonIcon fontSize="large" className="header-icon" />
            </Link>
          </IconButton>

          <Link to="/home">
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
    </Router>
  );
}

export default Header;
