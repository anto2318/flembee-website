import React from "react";
import { Container, Row, Col } from "reactstrap";

import { ProjectCard } from "../ProjectElement";

import { useSelector } from 'react-redux';

import "./styles.css";

import { PROJECTS } from "../../../assets/data/data";

export function OurProjects () {

  const {
		messages,
	} = useSelector((state) => state.language);

  return (
    <section style={{backgroundColor: "#F7F7F7"}}>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="upcoming__events__top" style={{textAlign: 'center'}}>
              <h3>{ messages.ourProjectsTitle }</h3>
              <p>{ messages.ourProjectsText }</p>
            </div>
          </Col>

          {PROJECTS(messages).map((item, index) => (
            <Col xxl="3" xl="4" lg="4" md="6" sm="7"  xs="8"  className="mb-4" key={index}>
              <ProjectCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};