import React, { useState, useEffect } from "react";
import {
  Container,
  Navbar,
  Nav,
  NavItem,
  Button
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import logo from './../../assets/img/logo_black.svg';

import { useDispatch } from 'react-redux';
import {
  changeLanguageProcess,
} from '@actions';

const LNavbar = () => {

  const dispatch = useDispatch();

  const [userLanguage, setUserLanguage] = useState();

  useEffect(() => {
  localStorage.setItem("userLanguage", userLanguage ? userLanguage : '')
  }, [userLanguage])

  const onChangeLanguage = async () => {
    dispatch(changeLanguageProcess())
  }

    return (
      <Navbar expand="lg" dark color="white" className="mb-4">
        <Container>
          <NavLink to="/" className="navbar-brand d-fles align-items-center text-dark">
            <img className="mr-2" style={{height: 30}} src={logo} alt="logo" />
            Flembee
          </NavLink>
            <Nav className="ml-lg-auto" navbar>
              <NavItem className="mx-2">
                <Button style={{
                      width: 48,
                      height: 48,
                      padding: "6px 0px",
                      borderRadius: 24,
                      fontSize: 14,
                      textAlign: "center",
                      background: "#FFF",
                      color: "#000"
                  }} onClick={() => onChangeLanguage()}>EN
                </Button>
              </NavItem>
            </Nav>
        </Container>
      </Navbar>
    );
};

export default LNavbar;
