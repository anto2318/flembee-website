import React from 'react';
import {
  Container,
  Row,
  Col,
  Button
} from 'reactstrap';
import devices from './../../assets/img/launch.svg';

const LHeader = () => {

  return (
    <div className="bg-white" style={{paddingBottom: '5rem'}}>
    	<Container>
    		<Row>
    			<Col xs="12" md="6">
				<p className="lead my-4">Best Web and Mobile Application Development Company</p>
    				<h1 className="display-4">
						Your trusted development partner
					</h1>
    				<p className="lead my-4">
						We provide web and mobile application development services to global companies.
						Hire the best developers, at affordable prices, based on the needs of your project. 
						Products adapted to your business, with 100% project delivery success.
					</p>
					<Button type="submit" size="lg" className=" mt-0 mt-md-3 mt-lg-0" style={{backgroundColor: '#000', borderRadius: 30, fontSize: 18}}>About us</Button>
    			</Col>
    			<Col xs="12" md="6">
    				<div className="devices pl-md-4 pt-5 pt-md-0">
    					<img src={devices} alt="devices" className="img-fluid" />
    				</div>
    			</Col>
    		</Row>
    	</Container>
    </div>
  );
};

export default LHeader;
