import React from "react";
import { Container, Row, Col } from "reactstrap";

import { ServiceCard } from "../ServiceElement";

import "./styles.css";

import { SERVICES } from "../../../assets/data/data";

export function OurServices () {

  return (
    <section style={{backgroundColor: "#F7F7F7"}}>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="upcoming__events__top" style={{textAlign: 'center'}}>
              <h3>Our Services</h3>
              <p>We constantly advance with new technologies. Stay up to date with our services.</p>
            </div>
          </Col>

          {SERVICES.map((item, index) => (
            <Col xxl="3" xl="4" lg="4" md="6" sm="7"  xs="8"  className="mb-4" key={index}>
              <ServiceCard item={item} isCreate={false} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};