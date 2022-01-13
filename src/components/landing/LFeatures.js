import React from 'react';
import {
  Container,
  Row,
  Col
} from 'reactstrap';
import Feature from './Feature';

import { useSelector } from 'react-redux';

import processDiscovery from '@svg/ic-new-process-discover.svg';
import processDesign from '@svg/ic-new-process-design.svg';
import processBuild from '@svg/ic-new-process-build.svg';
import processDeliver from '@svg/ic-new-process-deliver.svg';

const LFeatures = () => {

  const {
		messages,
	} = useSelector((state) => state.language);

  let fProps = [
    {
      color: "secondary",
      icon: processDiscovery,
      title: messages.discoverTitle,
      text: messages.discoverText,
    },
    {
      color: "secondary",
      icon: processDesign,
      title: messages.designTitle,
      text: messages.designText,
    },
    {
      color: "secondary",
      icon: processBuild,
      title: messages.developTitle,
      text: messages.developText,
    },
    {
      color: "secondary",
      icon: processDeliver,
      title: messages.deliverTitle,
      text: messages.deliverText,
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
            <h1 className="text-black">{ messages.processTitle }</h1>
            <p className="lead">{ messages.processText }</p>
          </div>
    		<Row style={{margin: '0 auto'}}>
          {features}
    		</Row>
    	</Container>
    </div>
  );
};

export default LFeatures;
