import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

import { useSelector } from 'react-redux';

import "./styles.css";

import heroImg from "../../../assets/images/aboutus.png";

export function AboutSection () {

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
                { messages.aboutHeader }
              </p>
              <h2>
                { messages.aboutTitle }
              </h2>
              <p>
                { messages.aboutText }
              </p>

              <div className="hero__btns d-flex align-items-center gap-4">
                <button className=" explore__btn d-flex align-items-center gap-2">
                  <i className="ri-rocket-line"></i>{" "}
                  <Link to="/home">{ messages.explore }</Link>
                </button>
                <button className=" create__btn d-flex align-items-center gap-2">
                  <i className="ri-send-plane-line"></i>
                  <Link to="/contact">{ messages.contactUs }</Link>
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