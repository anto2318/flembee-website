import React from 'react';
import LazyCard from "./../LazyCard";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Services = () => {
  let cardProps = [
    {
      image: "web-development.svg",
      background: "linear-gradient(rgb(209, 211, 246) 0%, rgb(209, 211, 246) 100%)",
      title: "Web Development",
      description: "We create custom web applications and solutions. We help you grow your business using the best technologies.",
      tag: 'none',
      link: "/"
    },
    {
      image: "mobile-development.svg",
      background: "linear-gradient(rgb(230, 221, 244) 0%, rgb(230, 221, 244) 100%)",
      title: "Mobile Apps",
      description: "We develop intuitive and attractive applications for Android, iOS and multiplatform for companies and consumers.",
      tag: 'none',
      link: "/"
    },
    {
      image: "ui-uix.svg",
      background: "linear-gradient(rgb(246, 214, 214) 0%, rgb(246, 214, 214) 100%)",
      title: "UI/UX Design",
      description: "Starting with concept, information architecture, visual identity, and UI / UX design, we deliver dazzling experiences for maximum user engagement.",
      tag: 'none',
      link: "/"
    },
    {
        image: "devops.svg",
        background: "linear-gradient(rgb(186, 228, 244) 0%, rgb(186, 228, 244) 100%)",
        title: "DevOps",
        description: "We help you in managing secure and stable infrastructure for Continuous Integration and Continuous Delivery for faster launches.",
        tag: 'none',
        link: "/"
      },
      {
        image: "iot.svg",
        background: "linear-gradient(rgb(235, 202, 217) 0%, rgb(235, 202, 217) 100%)",
        title: "IoT",
        description: "We develop innovative and customized IoT solutions to simplify and automate complex business processes to save overall operating costs.",
        tag: 'none',
        link: "/"
      },
      {
        image: "gaming.svg",
        background: "linear-gradient(rgb(196, 228, 238) 0%, rgb(196, 228, 238) 100%)",
        title: "Gaming",
        description: "We offer interactive, visually engaging and exciting gaming experiences on mobile, console, and virtual reality platforms.",
        tag: 'none',
        link: "/"
      },
      {
        image: "ai.svg",
        background: "linear-gradient(rgb(201, 232, 219) 0%, rgb(201, 232, 219) 100%)",
        title: "AI/ML",
        description: "We innovate next-generation AI solutions and applications for various industries.",
        tag: 'none',
        link: "/"
      },
      {
        image: "qa.svg",
        background: "linear-gradient(rgb(244, 220, 204) 0%, rgb(244, 220, 204) 100%)",
        title: "QA Services",
        description: "We guarantee that your software application is successful with manual and automated testing services.",
        tag: 'none',
        link: "/"
      },
      {
        image: "hire.svg",
        background: "linear-gradient(rgb(195, 216, 246) 0%, rgb(195, 216, 246) 100%)",
        title: "Dedicated Developers",
        description: "Hire your own team of developers for your short, long-term or permanent software project with guaranteed delivery.",
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
            <p className="lead">We constantly advance with new technologies. Stay up to date with our services.</p>
        </div>
        <Carousel responsive={responsive}>
            {cards}
        </Carousel>
    </div>
  );
};

export default Services;
