import React from 'react';
import {
  Container,
  Row,
  Col,
  Button
} from 'reactstrap';
import devices from './../../assets/img/satisfaction.svg';

import { useSelector } from 'react-redux';

const Promise = () => {

	const {
		messages,
	} = useSelector((state) => state.language);

  return (
    <div className="bg-white" style={{paddingTop: '5rem', paddingBottom: '5rem'}}>
    	<Container>
    		<Row>
    			<Col xs="12" md="8">
    				<h1>
						{ messages.guaranteeTitle }
					</h1>
    				<p className="lead my-4">
						<b>{ messages.guaranteeText1_1 } </b>{ messages.guaranteeText1_2 }
					</p>
					<p className="lead my-4">
					{ messages.guaranteeText2_1 } <b>{ messages.guaranteeText2_2 }</b> { messages.guaranteeText2_3 } <b>{ messages.guaranteeText2_4 }</b> { messages.guaranteeText2_5 }
					</p>
					<Button type="submit" size="lg" className=" mt-0 mt-md-3 mt-lg-0" style={{backgroundColor: '#000', borderRadius: 30, fontSize: 18}}>{ messages.contactUs }</Button>
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
