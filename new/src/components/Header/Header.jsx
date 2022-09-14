import React, { useRef, useEffect, useState } from "react";
import { Container } from "reactstrap";
import { useSelector } from 'react-redux';

import { getStorage } from '../../helpers';

import { NavLink, useNavigate } from "react-router-dom";

import logo from "../../assets/images/logo.png";

import "./header.css";

import { AccountModal } from "../UI";

import {DropdownComponent} from '../Dropdown';

import { SELLER__DATA } from "../../assets/data/data";

const NAV__LINKS = [
  {
    display: "Home",
    url: "/home",
  },
  {
    display: "Events",
    url: "/events",
  },
  {
    display: "Spaces",
    url: "/spaces",
  },
  {
    display: "Contact",
    url: "/contact",
  },
];

export function Header () {
  const headerRef = useRef(null);

  const menuRef = useRef(null);

  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  const user = getStorage.user();

  const isAuth = useSelector((state) => state.user.isAuthenticated);

  useEffect(() => {
    let isMounted = true;

    if (isMounted && isAuth)
      setShowModal(false)

    return () => {
        isMounted = false;
    };
  }, [isAuth]);

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

            {isAuth || (user && user.id) ?
              <div className="nav__right d-flex align-items-center gap-5" style={{paddingLeft: "2rem"}}>
                  <div className="single__seller-card d-flex align-items-center gap-3">
                    <button className="btn d-flex gap-2 align-items-center"
                          onClick={() => navigate('/dashboard/events')}>
                      <span>
                        <i className="ri-global-line"></i>
                      </span>
                      <span style={{color:" #000", textDecoration: "none", fontSize: "0.8rem"}}>English</span>
                    </button>
                    <DropdownComponent
                      label={
                          <>
                          <div style={{width: 50, height: 50}}>
                              <img style={{verticalAlign: 0}} src={SELLER__DATA[0].sellerImg} alt="" className="w-100" />
                            </div>
                          </>
                      }
                      options={[
                          {
                            label: 'Schedule',
                            icon: 'ri-calendar-line',
                            onClick: () => navigate('/schedule')
                          },
                          {
                              label: 'Spaces',
                              icon: 'ri-home-line',
                              onClick: () => navigate('/dashboard/spaces')
                          },
                          {
                              label: 'Settings',
                              icon: 'ri-settings-3-line',
                              onClick: () => console.log('Settings')
                          },
                          {
                              label: 'Logout',
                              icon: 'ri-logout-box-line',
                              onClick: () => console.log('logout')
                          }
                      ]}
                  />
                </div>
              </div>
              :
              <div className="nav__right d-flex align-items-center gap-5 ">
                <button className="btn d-flex gap-2 align-items-center"
                        onClick={() => setShowModal(true)}>
                  <span>
                    <i className="ri-user-line"></i>
                  </span>
                  <span style={{color:" #000", textDecoration: "none", fontSize: "0.8rem"}}>My Account</span>
                </button>
              </div>
            }
          </div>
        </Container>
      </header>
    </Container>
  );
};