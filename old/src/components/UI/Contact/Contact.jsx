import React, { useState, useRef } from "react";

import { Container, Row, Col } from "reactstrap";

import { useSelector } from 'react-redux';

import emailjs from '@emailjs/browser';


export function Contact () {

  const form = useRef();
  
  const { REACT_APP_EMAIL_SERVICE_ID, REACT_APP_EMAIL_CONTACT_TEMPLATE_ID, REACT_APP_EMAIL_PUBLIC_KEY } = process.env;
  
  const [isEmptyForm, setIsEmptyForm] = useState(false);
  const [submitButton, showSubmitButton] = useState(false);

  const {
		messages,
	} = useSelector((state) => state.language);

  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleContactFormChange = (e) => {    
    const {name, value} = e.target;

    setContactForm((prev) => {
      prev[name] = value;

      return prev;
    });
  };

  const onSendEmail = async (e) => {
    e.preventDefault();

    const checkProperties = Object.values(contactForm).every(el => el !== '');

    if(checkProperties){
      emailjs.sendForm(REACT_APP_EMAIL_SERVICE_ID, REACT_APP_EMAIL_CONTACT_TEMPLATE_ID, form.current, REACT_APP_EMAIL_PUBLIC_KEY)
        .then((result) => {
            console.log(result.text);
            showSubmitButton(true)
        }, (error) => {
            console.log(error.text);
        });
    }else{
      setIsEmptyForm(true);
    } 

  }

  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" className="m-auto text-center">
              <h2>{ messages.dropMessage }</h2>
              <p>
                { messages.anyDoubt }
              </p>
              <div className="contact mt-4">
                <form ref={form} onSubmit={onSendEmail}>
                  <div className="form__input">
                    <input
                      type="text"
                      placeholder={ messages.name }
                      name="name"
                      style={{color: "black", border: "1px solid #eb6262"}}
                      onClick={() =>{
                        if(isEmptyForm)
                          setIsEmptyForm(false);
                        }}
                        onChange={(e) => handleContactFormChange(e)} />
                  </div>
                  <div className="form__input">
                    <input
                      type="email"
                      placeholder={ messages.email }
                      name="email"
                      style={{color: "black", border: "1px solid #eb6262"}}
                      onClick={() =>{
                        if(isEmptyForm)
                          setIsEmptyForm(false);
                        }}
                      onChange={(e) => handleContactFormChange(e)}
                    />
                  </div>
                  <div className="form__input">
                    <textarea
                      rows="7"
                      placeholder={ messages.typeMessage }
                      name="message"
                      style={{color: "black", border: "1px solid #eb6262"}}
                      onClick={() =>{
                        if(isEmptyForm)
                          setIsEmptyForm(false);
                        }}
                      onChange={(e) => handleContactFormChange(e)}
                    ></textarea>
                  </div>
                  {isEmptyForm && 
                      <p className='text-end' style={{color: '#eb6262', fontSize: '0.9rem'}}>{messages.fieldsBlank}</p>
                  }                  
                  {submitButton ?  
                    (<div style={{display: 'inline-flex'}}>
                      <p className='text-center' style={{color: '#000', fontSize: '0.9rem'}}>{messages.messageSent}</p>
                      <i className="ms-2 ri-checkbox-circle-line" style={{color: 'green', fontSize: '25px'}}/>
                    </div>)
                    : (<button type="submit" className="place__bid-btn" disabled={submitButton}>
                        <i className="me-2 ri-send-plane-line" />
                          { messages.send }
                      </button>)
                  }
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};