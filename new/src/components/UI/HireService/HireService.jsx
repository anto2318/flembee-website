import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

import { METHODOLOGY } from "../../../assets/data/data";

import "./styles.css";

export function HireService () {
  return (
    <section style={{padding: "40px 0px"}}>
      <Container>
        <Row>
          <Col lg="12">
            <div className="upcoming__events__top">
              <h2>Hire the best services for your project</h2>
              <p>Flembee is a top web design agencies and software development company, founded in Caracas, Venezuela. 
                Our great team of developers are committed and available for projects that pose a great challenge. 
                We use the best trending web technologies, front-end technologies like ReactJs, and back-end technologies 
                like Node.js to develop responsive and custom websites, web apps and e-commerce solutions. 
                We also develop native mobile apps for Android and iOS and cross-platform mobile apps with React Native.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
