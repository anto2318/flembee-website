import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

import { useSelector } from 'react-redux';

import "./styles.css";

import heroImg from "../../../assets/svg/launch.svg";

export function HeroSection () {

  const {
		messages,
	} = useSelector((state) => state.language);

  return (
    <section className="hero__section">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <p>
                { messages.header }
              </p>
              <h2>
                { messages.title }
              </h2>
              <p>
                { messages.subtitle }
              </p>

              <div className="hero__btns d-flex align-items-center gap-4">
                <button className=" explore__btn d-flex align-items-center gap-2">
                  <i className="ri-rocket-line"></i>{" "}
                  <Link to="/events">{ messages.explore }</Link>
                </button>
                <button className=" create__btn d-flex align-items-center gap-2">
                  <i className="ri-information-line"></i>
                  <Link to="/dashboard/create-event">{ messages.aboutUs }</Link>
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