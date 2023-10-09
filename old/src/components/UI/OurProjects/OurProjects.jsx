import React from "react";
import { Container, Col } from "reactstrap";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { ProjectCard } from "../ProjectElement";

import { useSelector } from 'react-redux';

import "./styles.css";

import { PROJECTS } from "../../../assets/data/data";

export function OurProjects () {

  const {
		messages,
	} = useSelector((state) => state.language);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section style={{backgroundColor: "#F7F7F7"}}>
      <Container>
        <Col lg="12" className="mb-5">
          <div className="upcoming__events__top" style={{textAlign: 'center'}}>
            <h3>{ messages.ourProjectsTitle }</h3>
            <p>{ messages.ourProjectsText }</p>
          </div>
        </Col>
        <Carousel responsive={responsive}>
          {PROJECTS(messages).map((item, index) => (
            <ProjectCard item={item} messages={messages} key={index}/>
          ))}
        </Carousel>
      </Container>
    </section>
  );
};