import React from 'react';
import {
  Container,
} from 'reactstrap';
import LazyCard from "./../LazyCard";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Services = (props) => {
  let cardProps = [
    {
      image: "dog-1.jpg",
      title: "How to look after and care for a dog",
      description: "Owning a dog is great fun and immensely rewarding. But, dogs have complex needs and each dog is unique.",
      tag: {color: "success", name: "Pets"},
      button: {link: "/", outline: false, color: "primary"}
    },
    {
      image: "dog-2.jpg",
      title: "Woof! How to find dog-friendly beaches in Spain",
      description: "Considering Spain's abundant coastline, beaches that do allow you to take your pooch to feel sand...",
      tag: {color: "warning", name: "Vacation"},
      button: {link: "/", outline: true, color: "primary"}
    },
    {
      image: "dog-3.jpg",
      title: "Getting Started With Your Puppy",
      description: "This new addition to your family will require lots of love, attention and plenty of supplies.",
      tag: {color: "secondary", name: "Hobby"},
      button: {link: "/", outline: true, color: "primary"}
    },
    {
        image: "dog-2.jpg",
        title: "Woof! How to find dog-friendly beaches in Spain",
        description: "Considering Spain's abundant coastline, beaches that do allow you to take your pooch to feel sand...",
        tag: {color: "warning", name: "Vacation"},
        button: {link: "/", outline: true, color: "primary"}
      },
  ];

  let cards = cardProps.map((p, index) => {
    return (
        <LazyCard {...p} key={`key-index-${index}`}/>
    );
  })

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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
    <div className="blog-posts bg-light">
        <div className="text-center">
            <h2>Our Services</h2>
            <p className="lead">We are constantly releasing new features. Stay up to date with us.</p>
        </div>
        <Carousel responsive={responsive}>
        {cards}
      </Carousel>
    </div>
  );
};

export default Services;
