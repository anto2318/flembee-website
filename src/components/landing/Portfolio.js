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
      description: "E-commerce platform that facilitates inventory management, marketing and sales.",
      tag: 'none',
      link: "/"
    },
    {
      image: "food-blog.jpg",
      background:  '#FFF',
      title: "Food Blog",
      description: "Reference food blog for all people who want to have a healthy lifestyle.",
      tag: 'none',
      link: "/"
    },
    {
      image: "solidarity.jpg",
      background:  '#FFF',
      title: "Kua Solidaria",
      description: "Organization committed to social causes, providing well-being to those most in need.",
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
