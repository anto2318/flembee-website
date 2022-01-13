import React, {useState} from 'react';
import firebase from "firebase";
import validator from "validator";

import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap';

import { useSelector } from 'react-redux';

const LContact = () => {

	const {
		messages,
	} = useSelector((state) => state.language);

	const sendEmail = firebase.functions().httpsCallable('sendEmail');
	const [name, setName] = useState("");
	const [email, setEmail] = useState("")
	const [message, setMessage] = useState("")
	const [sent, setSent] = useState("")
	const [emailValid, setEmailValid] = useState("")

	const validateEmail = (e) => {
		var email = e.target.value
	  
		if (validator.isEmail(email)) {
			setEmail(email)
			setEmailValid(true)
		} else {
			setEmailValid(false)
		}
	  }

  return (
    <div className="contact">
      <div className="cta text-center text-white" style={{backgroundColor: '#000'}}>
        <h1 className="text-white">{ messages.contactUs }</h1>
        <p className="lead">{ messages.anyDoubt }</p>
      </div>
      <div className="bg-light">
        <Container>
    	    <Row>
    		    <Col xs="12" md={{size: 8, offset: 2}}>
    			    <Card className="no-hover">
    				    <CardBody className="p-5">
    							<Form onSubmit={async (e) => {
									e.preventDefault();
									if(name !== "" && email !== "" && message !== ""){
										sendEmail({
										name: name,
										email: email,
										message: message
										})
										.then(() => {
											setName("")
											setEmail("")
											setMessage("")
											setSent(true)
											setTimeout(() => setSent(""), 3000);
										})
										.catch(() => {
											setSent(false)
											setTimeout(() => setSent(""), 3000);
										})
									}else{
										setSent("empty")
										setTimeout(() => setSent(""), 3000);
									}
								}}>
    							    <FormGroup>
    							      <Label>{ messages.name } (*)</Label>
    							      <Input type="text" bsSize="lg" onChange={(e) => setName(e.target.value)} placeholder={messages.yourName} />
    							    </FormGroup>
    							    <FormGroup>
    							      <Label>
										  Email (*)<br />
										  {emailValid !== "" ? (emailValid ? 
											(<span style={{
												fontWeight: 'bold',
												color: 'green',
												}}>{ messages.validEmail }</span>)
										: 
											(<span style={{
												fontWeight: 'bold',
												color: 'red',
												}}>{ messages.enterValidEmail }</span>))
										: <span></span>
										}
									  </Label>
    							      <Input type="email" bsSize="lg" onChange={validateEmail} placeholder={messages.yourEmail} />
    							    </FormGroup>
    							    <FormGroup>
    							      <Label>{ messages.typeMessage } (*)</Label>
    							      <Input type="textarea" onChange={(e) => setMessage(e.target.value)} rows="5"></Input>
    							    </FormGroup>
    							    <div className="text-center mt-5">
    							   	 <Button type="submit" size="lg" style={{backgroundColor: '#000'}}>{ messages.send }</Button>
    							    </div>
									<div style={{textAlign: "center", marginTop: 20}}>
										{sent !== "" ? (sent === 'empty' ? 
										<span style={{
											fontWeight: 'bold',
											color: 'red',
											}}>{ messages.messageNotSend }</span>
										: (sent ? 
											(<span style={{
												fontWeight: 'bold',
												color: 'green',
												}}>{ messages.messageSentSuccessfully }</span>)
										: 
											(<span style={{
												fontWeight: 'bold',
												color: 'red',
												}}>{ messages.somethingWrong }</span>)))
										: <span></span>
										}
									</div>
    							</Form>
    				    </CardBody>
    			    </Card>
    		    </Col>
    	    </Row>
        </Container>
      </div>
    </div>
  );
};

export default LContact;
