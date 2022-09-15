import React from "react";
import { Container, Row, Col } from "reactstrap";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { ServiceCard } from "../ServiceElement";

import "./styles.css";

import { SERVICES } from "../../../assets/data/data";

export function OurServices () {

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
            <h3>Our Services</h3>
            <p>We constantly advance with new technologies. Stay up to date with our services.</p>
          </div>
        </Col>
        <Carousel responsive={responsive}>
          {SERVICES.map((item, index) => (
            <ServiceCard item={item} key={index}/>
          ))}
        </Carousel>
      </Container>
    </section>
  );
};