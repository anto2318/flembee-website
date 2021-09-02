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
      image: "ecommerce.jpg",
      background: '#FFF',
      title: "Wondersell",
      description: "We create custom web applications and solutions. We help you grow your business using the best technologies.",
      tag: 'none',
      link: "/"
    },
    {
      image: "food-blog.jpg",
      background:  '#FFF',
      title: "Food Blog",
      description: "We develop intuitive and attractive applications for Android, iOS and multiplatform for companies and consumers.",
      tag: 'none',
      link: "/"
    },
    {
      image: "solidarity.jpg",
      background:  '#FFF',
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
