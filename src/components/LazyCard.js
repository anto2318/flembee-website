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

const LazyCard = (props) => {
  return (
    <Card style={{width: 350, margin: '0 auto', borderRadius: 12, background: props.background}}>
      <CardHeader style={{height: 300}}>
        <img className="card-img" style={{height: 250, paddingTop: 10, pointerEvents: 'none'}} src={require(`./../assets/img/${props.image}`)} alt="alt desc" />
      </CardHeader>
      <CardBody>
        <Badge className="mb-2" color={props.tag.color} style={{userSelect: 'none'}}>{props.tag.name}</Badge>
        <h5 className="card-title" style={{userSelect: 'none', textAlign: 'center'}}>{props.title}</h5>
        <p className="card-text" style={{userSelect: 'none', textAlign: 'center'}}>{props.description}</p>
      </CardBody>
      <CardFooter style={{paddingTop: 25, paddingBottom: 35, textAlign: 'center'}}>
        <a>Read More</a>
      </CardFooter>
    </Card>
  );
};

LazyCard.propType = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  tag: PropTypes.object,
  button: PropTypes.object
};

LazyCard.defaultProps = {
  image: "dog-1.jpg",
  title: "How to look after and care for a dog",
  description: "Owning a dog is great fun and immensely rewarding. But, dogs have complex needs and each dog is unique.",
  tag: {color: "success", name: "Pets"},
  button: {link: "/", ouline: false, color: "primary"}
};

export default LazyCard;
