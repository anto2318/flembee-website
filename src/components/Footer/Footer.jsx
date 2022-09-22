import React from "react";

import { Container, Row, Col } from "reactstrap";
import "./styles.css";

import logo from "../../assets/images/logo.png";

import { useSelector } from 'react-redux';

export function Footer () {

  const {
		messages,
	} = useSelector((state) => state.language);

  return (
    <footer className="footer">
      <Container>
        <Row>
          <div className="col-md-6">
            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>
            <p>
              { messages.footerDesc }
            </p>
          </div>
          <div className="col-md-4" style={{margin: "0 auto"}}>
            <h5>Newsletter</h5>
            <input type="text" className="newsletter" placeholder="Email" />
            <div className="social__links d-flex gap-3 align-items-center ">
              <span>
                <a href="https://instagram.com/flembee.tech" target="blank">
                  <i className="ri-instagram-line"></i>
                </a>
              </span>
              <span>
                <a href="https://www.linkedin.com/company/flembee" target="blank">
                  <i className="ri-linkedin-line"></i>
                </a>
              </span>
              <span>
                <a href="https://twitter.com/flembee_tech" target="blank">
                  <i className="ri-twitter-line"></i>
                </a>
              </span>
            </div>
          </div>
          <Col lg="12" className=" mt-4 text-center">
            <p className="copyright">
              {" "}
              Copyrights 2022, Developed by Flembee. All Rights Reserved.{" "}
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};