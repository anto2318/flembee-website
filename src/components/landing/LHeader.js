import React from 'react';
import {
  Container,
  Row,
  Col,
  Button
} from 'reactstrap';
import { useSelector } from 'react-redux';

import devices from './../../assets/img/launch.svg';

const LHeader = () => {

	const {
		messages,
	} = useSelector((state) => state.language);

  return (
    <div className="bg-white" style={{paddingBottom: '5rem'}}>
    	<Container>
    		<Row>
    			<Col xs="12" md="6">
				<p className="lead my-4">{ messages.header }</p>
    				<h1 className="display-4">
						{ messages.title }
					</h1>
    				<p className="lead my-4">
						{ messages.subtitle }
					</p>
					<Button type="submit" size="lg" className=" mt-0 mt-md-3 mt-lg-0" style={{backgroundColor: '#000', borderRadius: 30, fontSize: 18}}>{ messages.aboutUs }</Button>
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
