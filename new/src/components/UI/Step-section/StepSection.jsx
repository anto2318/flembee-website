import React from "react";
import { Container, Row, Col } from "reactstrap";

import { METHODOLOGY } from "../../../assets/data/data";

import "./step-section.css";

export function StepSection () {
  return (
    <section style={{padding: "20px 0px"}}>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="upcoming__events__top">
              <h3>Our Software Development Process</h3>
              <h5>The 4 Ds philosophy</h5>
            </div>
          </Col>

          {METHODOLOGY.map((item, index) => (
            <Col lg="3" md="4" sm="6" key={index} className="mb-4">
              <div className="single__step__item">
                <span>
                  <i className={item.icon}></i>
                </span>
                <div className="step__item__content">
                  <h5>
                    {item.title}
                  </h5>
                  <p className="mb-0">{item.desc}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
