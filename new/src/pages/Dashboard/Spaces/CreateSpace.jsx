import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col, Input } from "reactstrap";

import { Link, useNavigate } from "react-router-dom";

import { getStorage } from '../../../helpers';

import { CommonSection, DashboardProjectCard } from "../../../components";

import {
  getSpacesListProcess,
} from '../../../redux/actions';

import "./styles.css";

export function CreateSpace () {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const user = getStorage.user();

  if(!user)
    navigate('/home')
    
  const CONTACT_TYPES = [
    {
      idx: 0,
      title: "Teléfono",
      placeholder: "Introduzca número ...",
      icon: "ri-phone-line",
      type: "phone",
    },
    {
      idx: 1,
      title: "Facebook",
      placeholder: "Introduzca url ...",
      icon: "ri-facebook-line",
      type: "facebook",
    },
    {
      idx: 2,
      title: "Instagram",
      placeholder: "Introduzca url ...",
      icon: "ri-instagram-line",
      type: "instagram",
    },
    {
      idx: 3,
      title: "Twitter",
      placeholder: "Introduzca url ...",
      icon: "ri-twitter-line",
      type: "twitter",
    },
    {
      idx: 4,
      title: "Telegram",
      placeholder: "Introduzca url ...",
      icon: "ri-telegram-line",
      type: "telegram",
    },
  ];

  const [contactArray, setContactArray] = useState([]);
  const [contactTypesArray, setContactTypesArray] = useState([...CONTACT_TYPES]);

  const [previewState, setPreviewState] = useState({
    name: "The Best Caffeteria",
    avatarImage: "ava02",
    spaceImage: "img11",
    location: "Calle Madrid | Las Mercedes",
    price: 5,
  });

  const {
    spaces,
  } = useSelector((state) => state.spaces);

  useEffect(() => {
      let isMounted = true;
      if (isMounted)
        dispatch(getSpacesListProcess())

      return () => {
          isMounted = false;
      };
  }, [dispatch]);


  useEffect(() => {
    let isMounted = true;
    if (isMounted)
      setPreviewState({...previewState, space: spaces[0]})

    return () => {
        isMounted = false;
    };
}, [dispatch, spaces]);


  return (
    <>
      <CommonSection title="Crear Espacio" />

      <section>
        <Container>
          <Row>
          <Col lg="12" className="mb-5">
            <div className="market__product__filter d-flex align-items-center justify-content-between">
              <button
                className="bid__btn d-flex align-items-center gap-1" style={{background: 'transparent'}}
                onClick={() => navigate('/dashboard/spaces')}
              >
                <i className="ri-arrow-left-line"></i> Spaces
              </button>
            </div>
          </Col>
          <Col xxl="3" xl="4" lg="4" md="5" sm="7" xs="8"  className="mb-4">
              <h5 className="mb-4 text-light">Preview del espacio</h5>
              { previewState.space && ( <DashboardProjectCard item={previewState} />)}
            </Col>

            <Col xxl="9" xl="8" lg="8" md="12" sm="12" xs="12"  className="mb-4">
              <div className="create__item">
                <form>
                  <div className="form__input">
                    <label htmlFor="">Subir imagen</label>
                    <input type="file" className="upload__input" />
                  </div>

                  <div className="form__input">
                    <label htmlFor="">Nombre del espacio</label>
                    <input 
                      type="text"
                      placeholder="Introduzca nombre ..."
                      onChange={(e) => setPreviewState({...previewState, name: e.target.value})} 
                    />
                  </div>

                  <div className="form__input">
                    <label htmlFor="">Sobre el espacio</label>
                    <textarea
                      name=""
                      id=""
                      rows="7"
                      placeholder="Introduzca descripción ..."
                      className="w-100"
                      onChange={(e) => setPreviewState({...previewState, about: e.target.value})}
                    ></textarea>
                  </div>

                  <div className="d-flex align-items-center gap-4">
                    <div className="form__input w-50">
                      <label htmlFor="">Dirección del espacio</label>
                      <input 
                        type="text"
                        placeholder="Introduzca dirección ..."
                        onChange={(e) => setPreviewState({...previewState, location: e.target.value})} 
                      />
                    </div>

                    <div className="form__input w-50">
                      <label htmlFor="">Precio de reserva</label>
                      <input
                        type="number"
                        placeholder="Introduzca precio ..."
                        onChange={(e) => setPreviewState({...previewState, price: e.target.value})}
                      />
                    </div>
                  </div>
                  
                  <div className="form__input w-50">
                    <label htmlFor="">Email</label>
                    <input
                      type="email"
                      placeholder="Introduzca email ..."
                      onChange={(e) => setPreviewState({...previewState, contact: {...previewState.contact, email: e.target.value}})}
                    />
                  </div>

                  {contactArray.map((item, key) =>(
                      <div className="d-flex align-items-center gap-4" key={key}>
                        <div className="form__input w-50">
                          <label htmlFor="">{item.title}</label>
                          <input
                            type="text"
                            placeholder={item.placeholder}
                            onChange={(e) => setPreviewState({...previewState, contact: {...previewState.contact, [item.type]: e.target.value}})}
                          />
                        </div>

                        <div className="mt-4 form__input w-50">
                          <div className="social__links d-flex gap-3 align-items-center ">
                            <span>
                              <Link to="#"
                                onClick={() => {
                                  const cType = [...contactTypesArray, contactArray[key]].sort((a, b) => (a.idx - b.idx));
                                  setContactTypesArray(cType);
                                  const contArr = contactArray.filter((_, k) => k!== key);
                                  setContactArray(contArr);
                                }} 
                              >
                                <i className="ri-close-line"></i>
                              </Link>
                            </span>
                          </div>
                        </div>
                      </div>
                    ))
                  }

                  <div className="mt-4 form__input w-50">
                    <div className="social__links d-flex gap-3 align-items-center ">
                      {contactTypesArray.map((contact, key) =>(
                        <span key={key}>
                          <Link to="#"
                            onClick={() => {
                              const contact = [...contactArray, contactTypesArray[key]].sort((a, b) => (a.idx - b.idx));
                              setContactArray(contact);
                              const contTypes = contactTypesArray.filter((_, k) => k!== key);
                              setContactTypesArray(contTypes);
                            }} 
                          >
                            <i className={contact.icon}></i>
                          </Link>
                        </span>
                      ))}
                    </div>
                  </div>
                </form>

                <div className="mt-4" style={{float: "right"}}>
                  <button
                    className="bid__btn d-flex align-items-center gap-2"
                    onClick={() => console.log(previewState)}
                  >
                    <i className="ri-send-plane-fill"></i> Enviar solicitud
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
