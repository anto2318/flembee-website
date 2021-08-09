import React from 'react';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';

import './AboutStyle.css';

const About = () => {

  return (
    <div className="bg-white" style={{paddingBottom: '5rem'}}>
    	<Container>
    		<Row>
                <div style={{paddingLeft: 15}}>
                    <h1 className="text-black">Hire the best services for your project</h1>
                </div>
    			<Col xs="12" md="9">
    				<p className="lead my-4">
                        Flembee is a top web design agencies and software development company, 
                        founded in Caracas, Venezuela. Our great team of developers are committed and available 
                        for projects that pose a great challenge. We use the best trending web technologies, 
                        front-end technologies like ReactJs, and back-end technologies like Node.js to develop 
                        responsive and custom websites, web apps and e-commerce solutions.
                    </p>
    				<p className="lead my-4">
                        We also develop native mobile apps for Android and iOS and cross-platform mobile apps with React Native.
					</p>
    			</Col>
    			<Col xs="12" md="3">
    				<div className="devices pl-md-4 pt-5 pt-md-0">
                        <ul style={{listStyle: 'none'}}>
                            <li style={{marginBottom: 5}}>
                                <a>Our services</a>
                            </li>
                            <li style={{marginBottom: 5}}>
                                <a>Our story</a>
                            </li>
                            <li style={{marginBottom: 5}}>
                                <a>Contact us</a>
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
  