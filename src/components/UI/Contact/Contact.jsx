import React, { useRef } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

import { useSelector } from 'react-redux';

export function Contact () {

  const nameRef = useRef("");
  const emailRef = useRef("");
  const messageRef = useRef("");

  const {
		messages,
	} = useSelector((state) => state.language);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

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
                <form onSubmit={handleSubmit}>
                  <div className="form__input">
                    <input
                      type="text"
                      placeholder={ messages.name }
                      ref={nameRef}
                      style={{color: "black", border: "1px solid #eb6262"}}
                    />
                  </div>
                  <div className="form__input">
                    <input
                      type="email"
                      placeholder={ messages.email }
                      ref={emailRef}
                      style={{color: "black", border: "1px solid #eb6262"}}
                    />
                  </div>
                  <div className="form__input">
                    <textarea
                      rows="7"
                      placeholder={ messages.typeMessage }
                      ref={messageRef}
                      style={{color: "black", border: "1px solid #eb6262"}}
                    ></textarea>
                  </div>
                  <div className="guarantee__btns d-flex justify-content-center align-items-center gap-4">
                    <button className=" create__btn d-flex align-items-center gap-2">
                      <i className="ri-send-plane-line"></i>
                      <Link to="/dashboard/create-event">{ messages.send }</Link>
                    </button>
                  </div>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};