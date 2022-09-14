import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

import "./styles.css";

import guaranteeImg from "../../../assets/svg/satisfaction.svg";

export function Guarantee () {
  return (
    <section className="guarantee__section">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="guarantee__content">
              <h2>
                Guaranteed customer satisfaction
              </h2>
              <p>
                <b>Have an idea?</b> Develop with us and get results on time. We promise to make you feel satisfied.
              </p>
              <p>The first <b>5 days</b> are on us with <b>ZERO</b> upfront investment.</p>
              <div className="guarantee__btns d-flex align-items-center gap-4">
                <button className=" create__btn d-flex align-items-center gap-2">
                  <i className="ri-send-plane-line"></i>
                  <Link to="/dashboard/create-event">Contact us</Link>
                </button>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="guarantee__img">
              <img src={guaranteeImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};