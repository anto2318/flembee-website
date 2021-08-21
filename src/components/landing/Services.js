import React from 'react';
import {
  Container,
} from 'reactstrap';
import LazyCard from "./../LazyCard";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Services = () => {
  let cardProps = [
    {
      image: "web-development.svg",
      background: "linear-gradient(rgb(209, 211, 246) 0%, rgb(209, 211, 246) 100%)",
      title: "Web Development",
      description: "Owning a dog is great fun and immensely rewarding. But, dogs have complex needs and each dog is unique.",
      tag: 'none',
      link: "/"
    },
    {
      image: "mobile-development.svg",
      background: "linear-gradient(rgb(230, 221, 244) 0%, rgb(230, 221, 244) 100%)",
      title: "Mobile Apps",
      description: "Considering Spain's abundant coastline, beaches that do allow you to take your pooch to feel sand...",
      tag: 'none',
      link: "/"
    },
    {
      image: "ui-uix.svg",
      background: "linear-gradient(rgb(246, 214, 214) 0%, rgb(246, 214, 214) 100%)",
      title: "UI/UX Design",
      description: "This new addition to your family will require lots of love, attention and plenty of supplies.",
      tag: 'none',
      link: "/"
    },
    {
        image: "devops.svg",
        background: "linear-gradient(rgb(186, 228, 244) 0%, rgb(186, 228, 244) 100%)",
        title: "DevOps",
        description: "Considering Spain's abundant coastline, beaches that do allow you to take your pooch to feel sand...",
        tag: 'none',
        link: "/"
      },
      {
        image: "iot.svg",
        background: "linear-gradient(rgb(235, 202, 217) 0%, rgb(235, 202, 217) 100%)",
        title: "IoT",
        description: "Considering Spain's abundant coastline, beaches that do allow you to take your pooch to feel sand...",
        tag: 'none',
        link: "/"
      },
      {
        image: "gaming.svg",
        background: "linear-gradient(rgb(196, 228, 238) 0%, rgb(196, 228, 238) 100%)",
        title: "Gaming",
        description: "Considering Spain's abundant coastline, beaches that do allow you to take your pooch to feel sand...",
        tag: 'none',
        link: "/"
      },
      {
        image: "ai.svg",
        background: "linear-gradient(rgb(201, 232, 219) 0%, rgb(201, 232, 219) 100%)",
        title: "AI/ML",
        description: "Considering Spain's abundant coastline, beaches that do allow you to take your pooch to feel sand...",
        tag: 'none',
        link: "/"
      },
      {
        image: "qa.svg",
        background: "linear-gradient(rgb(244, 220, 204) 0%, rgb(244, 220, 204) 100%)",
        title: "QA Services",
        description: "Considering Spain's abundant coastline, beaches that do allow you to take your pooch to feel sand...",
        tag: 'none',
        link: "/"
      },
      {
        image: "hire.svg",
        background: "linear-gradient(rgb(195, 216, 246) 0%, rgb(195, 216, 246) 100%)",
        title: "Dedicated Developers",
        description: "Considering Spain's abundant coastline, beaches that do allow you to take your pooch to feel sand...",
        tag: 'none',
        link: "/"
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
