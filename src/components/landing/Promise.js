import React from 'react';
import {
  Container,
  Row,
  Col,
  Button
} from 'reactstrap';
import devices from './../../assets/img/satisfaction.svg';

const Promise = () => {

  return (
    <div className="bg-white" style={{paddingTop: '5rem', paddingBottom: '5rem'}}>
    	<Container>
    		<Row>
    			<Col xs="12" md="8">
    				<h1>
						Guaranteed customer satisfaction
					</h1>
    				<p className="lead my-4">
						<b>Have an idea? </b>Develop with us and get results on time. We promise to make you feel satisfied.
					</p>
					<p className="lead my-4">
						The first <b>5 days</b> are on us with <b>ZERO</b> upfront investment.
					</p>
					<Button type="submit" size="lg" className=" mt-0 mt-md-3 mt-lg-0" style={{backgroundColor: '#000', borderRadius: 30, fontSize: 18}}>Contact us</Button>
    			</Col>
    			<Col xs="8" md="4">
    				<div className="devices pl-md-4 pt-5 pt-md-0">
    					<img src={devices} alt="devices" className="img-fluid" />
    				</div>
    			</Col>
    		</Row>
    	</Container>
    </div>
  );
};

export default Promise;
