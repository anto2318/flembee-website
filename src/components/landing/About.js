import React from 'react';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';

import { useSelector } from 'react-redux';

import './AboutStyle.css';

const About = () => {

    const {
		messages,
	} = useSelector((state) => state.language);

  return (
    <div className="bg-white" style={{paddingBottom: '5rem'}}>
    	<Container>
    		<Row>
                <div style={{paddingLeft: 15}}>
                    <h1 className="text-black">{ messages.servicesTitle }</h1>
                </div>
    			<Col xs="12" md="9">
    				<p className="lead my-4">
                        { messages.servicesText }
                    </p>
    				<p className="lead my-4">
                        { messages.servicesText2 }
					</p>
    			</Col>
    			<Col xs="12" md="3">
    				<div className="devices pl-md-4 pt-5 pt-md-0">
                        <ul style={{listStyle: 'none'}}>
                            <li style={{marginBottom: 5}}>
                                <a>{ messages.ourServices }</a>
                            </li>
                            <li style={{marginBottom: 5}}>
                                <a>{ messages.ourStory }</a>
                            </li>
                            <li style={{marginBottom: 5}}>
                                <a>{ messages.contactUs }</a>
                            </li>
                        </ul>
    				</div>
    			</Col>
    		</Row>
    	</Container>
    </div>
  );
};

export default About;
  