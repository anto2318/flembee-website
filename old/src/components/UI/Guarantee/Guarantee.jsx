import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

import { useSelector } from 'react-redux';

import "./styles.css";

import guaranteeImg from "../../../assets/svg/satisfaction.svg";

export function Guarantee () {

  const {
		messages,
	} = useSelector((state) => state.language);

  return (
    <section className="guarantee__section">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="guarantee__content">
              <h2>
                { messages.guaranteeTitle }
              </h2>
              <p>
                <b>{ messages.guaranteeText1_1 }</b> { messages.guaranteeText1_2 }
              </p>
              <p>{ messages.guaranteeText2_1 } <b>{ messages.guaranteeText2_2 }</b> { messages.guaranteeText2_3 } <b>{ messages.guaranteeText2_4 }</b> { messages.guaranteeText2_5 }</p>
              <div className="guarantee__btns d-flex align-items-center gap-4">
                <button className=" create__btn d-flex align-items-center gap-2">
                  <i className="ri-send-plane-line"></i>
                  <Link to="/contact">{ messages.contactUs }</Link>
                </button>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="guarantee__img">
              <img src={guaranteeImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};