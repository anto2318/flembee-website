import React, { useRef, useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';

import { Container } from "reactstrap";

import en from '../../locales/en/messages.json';
import es from '../../locales/es/messages.json';

import {
  getLanguage,
  changeLanguage,
} from '../../redux/actions';

import { NavLink, useLocation } from "react-router-dom";

import logo from "../../assets/images/logo.png";

import "./header.css";

import { AccountModal } from "../UI";

export function Header () {
  const dispatch = useDispatch();

  const {
    language,
    messages
  } = useSelector((state) => state.language);

  const headerRef = useRef(null);

  const menuRef = useRef(null);

  const location = useLocation();
  
  const [showModal, setShowModal] = useState(false);

  const NAV__LINKS = [
    {
      display: "Home",
      url: "/home",
    },
    {
      display: messages.aboutUs,
      url: "/about",
    },
    {
      display: messages.schedule,
      url: "/schedule",
    },
    {
      display: messages.contactUs,
      url: "/contact",
    },
  ];

  useEffect(() => {
      window.addEventListener("scroll", () => {
        if (
          document.body.scrollTop > 80 ||
          document.documentElement.scrollTop > 80
        ) {
          headerRef.current.classList.add("header__shrink");
        } else {
          headerRef.current.classList.remove("header__shrink");
        }
      });
      return () => {
        window.removeEventListener("scroll");
      };
  }, []);

  useEffect(() => {
      let isMounted = true;

      if (isMounted) dispatch(getLanguage());

      return () => {
          isMounted = false;
      };
  }, []);

  const onChangeLanguage = async () => {
    const lng = language === "English" ? {language: "Español", messages: es} : {language: "English", messages: en}
    dispatch(changeLanguage(lng));
  }

  const toggleMenu = () => menuRef.current.classList.toggle("active__menu");

  return (
    <Container>
      {showModal && <AccountModal setShowModal={setShowModal} />}
      <header className="header" ref={headerRef}>
        <Container>
          <div className="navigation">
            <span className="mobile__menu" style={{paddingRight: 20}}>
              <i className="ri-menu-line" onClick={toggleMenu}></i>
            </span>
            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>

            <div className="nav__menu" ref={menuRef} onClick={toggleMenu}>
              <ul className="nav__list">
                {NAV__LINKS.map((item, index) => (
                  <li className="nav__item" key={index}>
                      <NavLink
                        to={item.url}
                        className={(navClass) =>
                          navClass.isActive ? "active" : ""
                        }
                      >
                        {item.display}
                      </NavLink>
                  </li>
                ))}
              </ul>
            </div>

              <div className="nav__right d-flex align-items-center gap-5" style={{paddingLeft: "2rem"}}>
                  <div className="single__seller-card d-flex align-items-center gap-3">
                    <button className="btn d-flex gap-2 align-items-center"
                            onClick={() => onChangeLanguage()}>
                      <span>
                        <i className="ri-global-line"></i>
                      </span>
                      <span style={{color:" #000", textDecoration: "none", fontSize: "0.8rem"}}>{language}</span>
                    </button>
                </div>
              </div>
          </div>
        </Container>
      </header>
    </Container>
  );
};