import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Badge
} from 'reactstrap';

const PortfolioCard = (props) => {
  return (
    <Card style={{width: 350, height: 350, margin: '0 auto', borderRadius: 12, 
    background: props.background, cursor: 'pointer', boxShadow: '0 0 2rem rgb(122 88 204 / 33%)'}}>
      <CardHeader style={{height: 150, textAlign: 'center'}}>
        <img className="card-img" style={{    height: 'inherit', width: 'auto', paddingTop: 10, pointerEvents: 'none', userSelect: 'none'}} src={require(`./../assets/img/${props.image}`)} alt="alt desc" />
      </CardHeader>
      <CardBody style={{marginTop: 25}}>
        <Badge className="mb-2" color={props.tag.color} style={{userSelect: 'none'}}>{props.tag.name}</Badge>
        <h6 style={{userSelect: 'none', textAlign: 'center'}}>{props.title}</h6>
        <p className="card-text" style={{marginTop: 10, userSelect: 'none', textAlign: 'center', fontSize: 14}}>{props.description}</p>
      </CardBody>
    </Card>
  );
};

PortfolioCard.propType = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  tag: PropTypes.object,
  button: PropTypes.object
};

PortfolioCard.defaultProps = {
  image: "dog-1.jpg",
  title: "How to look after and care for a dog",
  description: "Owning a dog is great fun and immensely rewarding. But, dogs have complex needs and each dog is unique.",
  tag: {color: "success", name: "Pets"},
  button: {link: "/", ouline: false, color: "primary"}
};

export default PortfolioCard;
