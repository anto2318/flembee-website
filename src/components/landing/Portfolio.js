import React from 'react';
import {
  Container,
  Row,
  Col
} from 'reactstrap';
import PortfolioCard from "../PortfolioCard";
import { useSelector } from 'react-redux';

const Portfolio = () => {

  const {
		messages,
	} = useSelector((state) => state.language);

  let cardProps = [
    {
      image: "ecommerce.jpg",
      background: '#FFF',
      title: messages.project1Title,
      description: messages.project1Text,
      tag: 'none',
      link: "/"
    },
    {
      image: "food-blog.jpg",
      background:  '#FFF',
      title: messages.project2Title,
      description: messages.project2Text,
      tag: 'none',
      link: "/"
    },
    {
      image: "solidarity.jpg",
      background:  '#FFF',
      title: messages.project3Title,
      description: messages.project3Text,
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
            <h2>{ messages.ourProjectsTitle }</h2>
            <p className="lead">{ messages.ourProjectsText }</p>
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
