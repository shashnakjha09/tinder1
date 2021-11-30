import React from "react";
import "./style.css";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import AddCircleIcon from "@material-ui/icons/AddCircle";

import { BrowserRouter as Link } from "react-router-dom";

function Edit() {
  return (
    <div className="main">
      <hr></hr>
      <Container>
        <h4>
          Edit info{" "}
          <Link to="/profile-info">
            <span class="done-button" style={{ float: "right" }}>
              Done
            </span>
          </Link>
        </h4>
        <hr></hr>
      </Container>

      <Container className="profile-image-flex">
        <div
          className="image1"
          style={{ backgroundImage: `url("https://i.ibb.co/2nbk6C3/jef.jpg")` }}
        >
          <AddCircleIcon className="pluse" fontSize="large" />
        </div>
        <div className="image1">
          <AddCircleIcon className="pluse" fontSize="large" />
        </div>
        <div className="image1">
          <AddCircleIcon className="pluse" fontSize="large" />
        </div>
      </Container>

      <Container className="profile-image-flex">
        <div className="image1">
          <AddCircleIcon className="pluse" fontSize="large" />
        </div>
        <div className="image1">
          <AddCircleIcon className="pluse" fontSize="large" />
        </div>
        <div className="image1">
          <AddCircleIcon className="pluse" fontSize="large" />
        </div>
      </Container>

      <Container className="profile-image-flex">
        <div className="image1">
          <AddCircleIcon className="pluse" fontSize="large" />
        </div>
        <div className="image1">
          <AddCircleIcon className="pluse" fontSize="large" />
        </div>
        <div className="image1">
          <AddCircleIcon className="pluse" fontSize="large" />
        </div>
      </Container>

      <Container>
        <h4 style={{ textAlign: "center" }}>
          Hold , drag and drop to reorder your photos
        </h4>
        <Link to="/">
          <h3 className="media-buttons">ADD MEDIA</h3>
        </Link>
      </Container>
      <hr></hr>
      <Container className="about-info">
        <h4>ABOUT SHASHANK</h4>
      </Container>
      <Container>
        <form>
          <div class="form-group">
            <label for="comment"></label>
            <textarea class="form-control" rows="5" id="comment">
              500
            </textarea>
          </div>
        </form>
      </Container>

      <Container className="passion">
        <h4>PASSIONS </h4>
      </Container>
      <Container className="passion-category">
        <h5 className="cat1">Vlogging</h5>
        <h5 className="cat1">Yoga</h5>
        <h5 className="cat1">Poetry</h5>
        <h5 className="cat1">Wine</h5>
        <h5 className="cat1">Outdoors</h5>
      </Container>

      <Container className="job-title">
        <h3>Job Title</h3>
      </Container>
      <Container className="add-job-title">
        <h4>Add Job Title</h4>
      </Container>

      <hr></hr>
      <Container className="company">
        <h3>COMPANY</h3>
      </Container>
      <Container className="add-company">
        <h4>Add Company</h4>
      </Container>

      <Container className="company">
        <h3>SCHOOL</h3>
      </Container>
      <Container className="add-company">
        <h4>
          Add School{" "}
          <span className="arrow" style={{ float: "right" }}>
            {">"}
          </span>
        </h4>
      </Container>

      <Container className="company">
        <h3>LIVING IN</h3>
      </Container>
      <Container className="add-company">
        <h4>
          Add City{" "}
          <span className="arrow" style={{ float: "right" }}>
            {">"}
          </span>
        </h4>
      </Container>

      <Container className="company">
        <h3>Show MY INSTAGRAM PHOTOS</h3>
      </Container>
      <Container className="add-company">
        <h4 style={{ color: "#fe3c72" }}>Connect Instagram</h4>
      </Container>

      <Container className="company">
        <h3>SPOTIFY ANTHEM</h3>
      </Container>
      <Container className="add-company">
        <h4>
          Choose anthom{" "}
          <span className="arrow" style={{ float: "right" }}>
            {">"}
          </span>
        </h4>
      </Container>

      <Container className="company">
        <h3>GENDER</h3>
      </Container>
      <Container className="add-company">
        <h4>
          Choose anthom{" "}
          <span className="arrow" style={{ float: "right" }}>
            {">"}
          </span>
        </h4>
      </Container>

      <Container className="company">
        <h3>SEXUAL</h3>
      </Container>
      <Container className="add-company">
        <h4>
          Straight{" "}
          <span className="arrow" style={{ float: "right" }}>
            {">"}
          </span>
        </h4>
      </Container>
    </div>
  );
}
export default Edit;
