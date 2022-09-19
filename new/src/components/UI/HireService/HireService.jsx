import React from "react";
import { Container, Row, Col } from "reactstrap";

import { useSelector } from 'react-redux';

import "./styles.css";

export function HireService () {

  const {
		messages,
	} = useSelector((state) => state.language);

  return (
    <section style={{padding: "40px 0px"}}>
      <Container>
        <Row>
          <Col lg="12">
            <div className="upcoming__events__top">
              <h2>{ messages.servicesTitle }</h2>
              <p>{ messages.servicesText }</p>
              <p>{ messages.servicesText2 }</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
