import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

import { useSelector } from 'react-redux';

import "./styles.css";

import heroImg from "../../../assets/images/contactus.png";

export function ContactSection () {

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
                { messages.contactHeader }
              </p>
              <h2>
                { messages.contactTitle }
              </h2>
              <p>
                { messages.contactText }
              </p>

              <div className="hero__btns d-flex align-items-center gap-4">
                <button className=" explore__btn d-flex align-items-center gap-2">
                  <i className="ri-chat-3-line"></i>{" "}
                  <a href="https://wa.me/message/NF6FCVSJZIQMC1" target="_blank" rel="noreferrer">{ messages.chatUs }</a>
                </button>
                {/* <button className=" create__btn d-flex align-items-center gap-2">
                  <i className="ri-computer-line"></i>
                  <Link to="/contact">{ messages.joinUs }</Link>
                </button> */}
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