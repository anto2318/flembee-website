import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

import "./styles.css";

import heroImg from "../../../assets/svg/launch.svg";

export function HeroSection () {
  return (
    <section className="hero__section">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <p>
                Best Web and Mobile Application Development Company
              </p>
              <h2>
                Your trusted development partner
              </h2>
              <p>
                We provide web and mobile application development services to global companies. 
                Hire the best developers, at affordable prices, based on the needs of your project. 
                Products adapted to your business, with 100% project delivery success.
              </p>

              <div className="hero__btns d-flex align-items-center gap-4">
                <button className=" explore__btn d-flex align-items-center gap-2">
                  <i className="ri-rocket-line"></i>{" "}
                  <Link to="/events">Explore</Link>
                </button>
                <button className=" create__btn d-flex align-items-center gap-2">
                  <i className="ri-information-line"></i>
                  <Link to="/dashboard/create-event">About us</Link>
                </button>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="hero__img">
              <img src={heroImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};