import React from 'react';
import LazyCard from "./../LazyCard";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useSelector } from 'react-redux';

const Services = () => {
  const {
		messages,
	} = useSelector((state) => state.language);

  let cardProps = [
    {
      image: "web-development.svg",
      background: "linear-gradient(rgb(209, 211, 246) 0%, rgb(209, 211, 246) 100%)",
      title: messages.service1Title,
      description: messages.service1Text,
      tag: 'none',
      link: "/"
    },
    {
      image: "mobile-development.svg",
      background: "linear-gradient(rgb(230, 221, 244) 0%, rgb(230, 221, 244) 100%)",
      title: messages.service2Title,
      description: messages.service2Text,
      tag: 'none',
      link: "/"
    },
    {
      image: "ui-uix.svg",
      background: "linear-gradient(rgb(246, 214, 214) 0%, rgb(246, 214, 214) 100%)",
      title: messages.service3Title,
      description: messages.service3Text,
      tag: 'none',
      link: "/"
    },
    {
        image: "devops.svg",
        background: "linear-gradient(rgb(186, 228, 244) 0%, rgb(186, 228, 244) 100%)",
        title: messages.service4Title,
      description: messages.service4Text,
        tag: 'none',
        link: "/"
      },
      {
        image: "iot.svg",
        background: "linear-gradient(rgb(235, 202, 217) 0%, rgb(235, 202, 217) 100%)",
        title: messages.service5Title,
      description: messages.service5Text,
        tag: 'none',
        link: "/"
      },
      {
        image: "gaming.svg",
        background: "linear-gradient(rgb(196, 228, 238) 0%, rgb(196, 228, 238) 100%)",
        title: messages.service6Title,
        description: messages.service6Text,
        tag: 'none',
        link: "/"
      },
      {
        image: "ai.svg",
        background: "linear-gradient(rgb(201, 232, 219) 0%, rgb(201, 232, 219) 100%)",
        title: messages.service7Title,
        description: messages.service7Text,
        tag: 'none',
        link: "/"
      },
      {
        image: "qa.svg",
        background: "linear-gradient(rgb(244, 220, 204) 0%, rgb(244, 220, 204) 100%)",
        title: messages.service8Title,
        description: messages.service8Text,
        tag: 'none',
        link: "/"
      },
      {
        image: "hire.svg",
        background: "linear-gradient(rgb(195, 216, 246) 0%, rgb(195, 216, 246) 100%)",
        title: messages.service9Title,
        description: messages.service9Text,
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
    <div className="bg-light" style={{paddingTop: '5rem', paddingBottom: '5rem'}}>
        <div className="text-center" style={{paddingBottom: '4rem'}}>
            <h2>{ messages.ourServicesTitle }</h2>
            <p className="lead">{ messages.ourServicesText }</p>
        </div>
        <Carousel responsive={responsive}>
            {cards}
        </Carousel>
    </div>
  );
};

export default Services;
