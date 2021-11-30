import React from "react";
import { Container } from "react-bootstrap";
// import ProgressBar from 'react-bootstrap/ProgressBar'
// import Table from 'react-bootstrap/Table'
import "./style.css";
// import TinderCard from 'react-tinder-card';
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";
import LaunchIcon from "@material-ui/icons/Launch";
import { BrowserRouter as Link } from "react-router-dom";

function Settings() {
  return (
    <div>
      <Container className="setting-master">
        <h4 id="setting-text">Settings</h4>
        <Link to="/profile-info">
          <h4 id="done">Done</h4>
        </Link>
      </Container>

      <Container className="setting-card">
        <div className="setting-logo">
          <div className="setting-logo-heading">tinder</div>
          <div id="setting-logo-text">PLATINUM</div>
        </div>
        <div className="setting-para">
          <p>Priority Likes, Message befour you Match & More</p>
        </div>
      </Container>

      <Container className="setting-card">
        <div className="setting-logo">
          <div className="setting-logo-heading">tinder</div>
          <div id="setting-logo-gold">GOLD</div>
        </div>
        <div className="setting-para">
          <p>See Who Likes You & More!</p>
        </div>
      </Container>

      <Container className="setting-card">
        <div className="setting-logo">
          <div className="setting-logo-heading">tinder</div>
          <div id="setting-logo-plus">+</div>
        </div>
        <div className="setting-para">
          <p>Unlimited Likes & More</p>
        </div>
      </Container>

      <Container className="setting-card-last">
        <div className="setting-logo">
          <div className="setting-logo-lighting">
            <IconButton className="setting-logo-lighting-icon">
              <FlashOnIcon fontSize="large" />
            </IconButton>
          </div>
        </div>
        <div className="setting-para">
          <p>
            0 remaning <span className="text-danger">Get More Boosts</span>
          </p>
        </div>
      </Container>

      <Container className="additional-setting">
        <h5 className="main-heading">ACCOUNT SETTINGS</h5>
        <hr></hr>
        <h6 id="account-heading-extra">Manage Payment Account</h6>
        <hr></hr>
        <h6 id="account-heading-extra">Restore Purchase</h6>
        <hr></hr>
        <h6 id="account-heading-extra">
          Email <span style={{ float: "right" }}>Verify Now {">"}</span>
        </h6>
        <hr></hr>
        <h6 id="account-heading-extra">
          Phone Number <span style={{ float: "right" }}>8002665433</span>
        </h6>
        <hr></hr>
        <h6 id="account-heading-extra">PROMO CODE</h6>
        <hr></hr>

        <p id="security">
          verify a phone Number And A email To help Secure Your Account
          <br></br>
          <h5 id="security-headings">DISCOVERY SETTINGS</h5>
        </p>
        <hr></hr>
        <h6 id="account-heading-extra">
          Location{" "}
          <span style={{ float: "right" }}>Darbhanga, India {">"}</span>
        </h6>
        <hr></hr>
        <h6 id="account-heading-extra">
          Maximum Distance <span style={{ float: "right" }}>80KM.</span>
        </h6>
        <div className="my-5">
          {/* <label htmlFor="customRange1">Example range</label> */}
          <input type="range" className="custom-range" id="customRange1" />
        </div>
        <hr></hr>
        <h6 id="account-heading-extra">
          Looking for <span style={{ float: "right" }}>Men {">"}</span>
        </h6>
        <hr></hr>
        <p id="security-legel">LEGAL</p>
        <hr></hr>
        <h6 id="account-heading-extra">
          Privecy Settings{" "}
          <span style={{ float: "right" }}>
            <LaunchIcon className="share" />{" "}
          </span>
        </h6>
        <hr></hr>
        <h6 id="account-heading-extra">
          Cookie policy{" "}
          <span style={{ float: "right" }}>
            <LaunchIcon className="share" />{" "}
          </span>
        </h6>
        <hr></hr>
        <h6 id="account-heading-extra">
          Privecy Policy{" "}
          <span style={{ float: "right" }}>
            <LaunchIcon className="share" />{" "}
          </span>
        </h6>
        <hr></hr>
        <h6 id="account-heading-extra">
          Terms Of Service{" "}
          <span style={{ float: "right" }}>
            <LaunchIcon className="share" />{" "}
          </span>
        </h6>
        <hr></hr>

        <p id="security-legel">SAFETY</p>
        <hr></hr>
        <h6 id="account-heading-extra">
          Community Guidlines{" "}
          <span style={{ float: "right" }}>
            <LaunchIcon className="share" />{" "}
          </span>
        </h6>
        <hr></hr>
        <h6 id="account-heading-extra">
          Safty & Policy{" "}
          <span style={{ float: "right" }}>
            <LaunchIcon className="share" />{" "}
          </span>
        </h6>
        <hr></hr>
        <h6 id="account-heading-extra">
          Safty Tips{" "}
          <span style={{ float: "right" }}>
            <LaunchIcon className="share" />{" "}
          </span>
        </h6>
        <hr></hr>

        <p id="security-legel">HELP & SUPPORT</p>
        <hr></hr>
        <h6 id="account-heading-extra">
          Help & Support{" "}
          <span style={{ float: "right" }}>
            <LaunchIcon className="share" />{" "}
          </span>
        </h6>
        <hr></hr>
        <p id="security-legel">LANGUAGE</p>
        <h6 id="account-heading-extra">
          Language <span style={{ float: "right" }}>English {">"}</span>
        </h6>
        <hr></hr>
        <h6 id="share-tinder" style={{ textAlign: "center" }}>
          Share Tinder
        </h6>
        <hr></hr>
        <h6 id="share-tinder" style={{ textAlign: "center" }}>
          Logout
        </h6>
        <hr></hr>
        <h6 id="share-tinder" style={{ textAlign: "center" }}>
          Delete Account
        </h6>
        <hr></hr>
      </Container>
    </div>
  );
}

export default Settings;
