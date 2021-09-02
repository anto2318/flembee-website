import React from 'react';
import {
  Container,
  Row,
  Col
} from 'reactstrap';
import PortfolioCard from "../PortfolioCard";

const Portfolio = () => {
  let cardProps = [
    {
      image: "web-development.svg",
      background: "linear-gradient(rgb(209, 211, 246) 0%, rgb(209, 211, 246) 100%)",
      title: "Wondersell",
      description: "We create custom web applications and solutions. We help you grow your business using the best technologies.",
      tag: 'none',
      link: "/"
    },
    {
      image: "mobile-development.svg",
      background: "linear-gradient(rgb(230, 221, 244) 0%, rgb(230, 221, 244) 100%)",
      title: "Food Blog",
      description: "We develop intuitive and attractive applications for Android, iOS and multiplatform for companies and consumers.",
      tag: 'none',
      link: "/"
    },
    {
      image: "ui-uix.svg",
      background: "linear-gradient(rgb(246, 214, 214) 0%, rgb(246, 214, 214) 100%)",
      title: "Kua Solidaria",
      description: "Starting with concept, information architecture, visual identity, and UI / UX design, we deliver dazzling experiences for maximum user engagement.",
      tag: 'none',
      link: "/"
    },
  ];

  let cards = cardProps.map((p, index) => {
    return (
      <Col style={{marginBottom: 20}} xs="12" md="4" key={`key-index-${index}`}>
        <PortfolioCard {...p} />
      </Col>
    );
  })

  return (
    <div className="features" style={{paddingTop: 0}}>
        <div className="text-center" style={{paddingBottom: '4rem'}}>
            <h2>Our Projects</h2>
            <p className="lead">We continuously improving but never delayed.</p>
        </div>
        <Container>
          <Row>
            {cards}
          </Row>
        </Container>
    </div>
  );
};

export default Portfolio;
