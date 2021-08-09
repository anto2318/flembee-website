import React from 'react';
import {
  Container,
  Row,
  Col
} from 'reactstrap';
import Feature from './Feature';

const LFeatures = () => {
  let fProps = [
    {
      color: "secondary",
      icon: "ic-new-process-discover.svg",
      title: "Discover",
      text: "Customers are our partners. We explore their requirements in depth and apply the strategy to make their project come true."
    },
    {
      color: "secondary",
      icon: "ic-new-process-design.svg",
      title: "Design",
      text: "We focus on design. Our goal is to create something unique that is easy for our clients."
    },
    {
      color: "secondary",
      icon: "ic-new-process-build.svg",
      title: "Develop",
      text: "We develop with the best technologies. We build with efficiency and skill, creating flexible and scalable, business-oriented solutions."
    },
    {
      color: "secondary",
      icon: "ic-new-process-deliver.svg",
      title: "Deliver",
      text: "We use agile methodologies. Our iterative approach allows us to better organize our work and we are always looking to improve what we do."
    }
  ]

  let features = fProps.map((feature, index) => {
    return (
      <Col xs="12" md="3" key={`feature-${index}`}>
        <Feature {...feature} />
      </Col>
    );
  });

  return (
    <div className="features" style={{padding: 0}}>
    	<Container>
      <div style={{paddingLeft: 15}}>
            <h1 className="text-black">Our Software Development Process</h1>
            <p className="lead">Our 4 Ds philosophy</p>
          </div>
    		<Row>
          {features}
    		</Row>
    	</Container>
    </div>
  );
};

export default LFeatures;
