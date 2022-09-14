import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col, Input } from "reactstrap";

import { useNavigate } from "react-router-dom";

import { getStorage } from '../../../helpers';

import { CommonSection, ServiceCard } from "../../../components";

import {
  getSpacesListProcess,
  createNewEvent,
} from '../../../redux/actions';

import "./styles.css";

export function CreateEvent () {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const user = getStorage.user();

  if(!user)
    navigate('/home')

  const [isEmptyForm, setIsEmptyForm] = useState(false);

  const [eventForm, setEventForm] = useState({
    description: '',
    host: user.id,
    image: '',
    name: '',
    price: '',
    space: '',
    from: '',
    to: '',
    startH: '',
    endH: ''
   });

  const [previewState, setPreviewState] = useState({
    description: "Travel Monkey Club es un evento muy cool",
    host: {
      name: user.name,
      userImage: 'ava01'
    },
    image: "img01",
    name: "Travel Monkey Club",
    price: 5,
    schedule: "2022-08-01T14:30:00.000Z"
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
    if (isMounted){
      setPreviewState({...previewState, space: spaces[0]})
      setEventForm({...eventForm, space: spaces[0]})
    }

    return () => {
        isMounted = false;
    };
  }, [dispatch, spaces]);


  const handleEventFormChange = (e, obj) => {

    setPreviewState({...previewState, ...obj});
    
    const {name, value} = e.target;

    setEventForm((prev) => {
      prev[name] = value;

      return prev;
    });
  };

  const onEventCreate = () => {
    eventForm.image = "img01";

    const checkProperties = Object.values(eventForm).every(el => el !== '');

    if(checkProperties){
      const { description, image, name, price, host,
        space, from, to, startH, endH } = eventForm;

      const spaceId = space._id;

      const schedule ={
        from: new Date(from),
        to: new Date(to),
        startHour: startH,
        endHour: endH
      };

      const eventObj = {
        name, description, 
        image, price, host, 
        space: spaceId, schedule
      };

      dispatch(
        createNewEvent(eventObj));

      navigate('/dashboard/events');

    }else{
      setIsEmptyForm(true);
    }  
  };

  return (
    <>
      <CommonSection title="Crear Evento" />

      <section>
        <Container>
          <Row>
          <Col lg="12" className="mb-5">
            <div className="market__product__filter d-flex align-items-center justify-content-between">
              <button
                className="bid__btn d-flex align-items-center gap-1" style={{background: 'transparent'}}
                onClick={() => navigate('/dashboard/events')}
              >
                <i className="ri-arrow-left-line"></i> Events
              </button>
            </div>
          </Col>
          <Col xxl="3" xl="4" lg="4" md="5" sm="7" xs="8"  className="mb-4">
              <h5 className="mb-4 text-light">Preview del evento</h5>
              { previewState.space && ( <ServiceCard item={previewState} isCreate={true}/>)}
            </Col>

            <Col xxl="9" xl="8" lg="8" md="12" sm="12" xs="12"  className="mb-4">
              <div className="create__item">
                <form>
                  <div className="form__input">
                    <label htmlFor="">Subir imagen</label>
                    <input type="file" className="upload__input" />
                  </div>

                  <div className="form__input">
                    <label htmlFor="">Nombre del evento</label>
                    <input
                      type="text"
                      name="name" 
                      placeholder="Introduzca nombre ..."
                      onClick={() =>{
                        if(isEmptyForm)
                          setIsEmptyForm(false);
                      }}
                      onChange={(e) => handleEventFormChange(e, {name: e.target.value})} 
                    />
                  </div>

                  <div className="form__input">
                    <label htmlFor="">Descripción</label>
                    <textarea
                      type="text"
                      name="description" 
                      id=""
                      rows="7"
                      placeholder="Introduzca descripción ..."
                      className="w-100"
                      onClick={() =>{
                        if(isEmptyForm)
                          setIsEmptyForm(false);
                      }}
                      onChange={(e) => handleEventFormChange(e, {description: e.target.value})}
                    ></textarea>
                  </div>

                  <div className=" d-flex align-items-center gap-4">
                  { previewState.space && ( 
                    <div className="form__input w-50">
                      <label htmlFor="">Lugar del evento</label>
                      <Input
                        type="select"
                        name="space"
                        id="space"
                        style={{color: "#fff", 
                                backgroundColor: "transparent", 
                                border: "1px solid rgba(221, 221, 221, 0.171)",
                                outline: "none",
                                borderRadius: 5,
                                padding: "7px 25px",
                                cursor: "pointer",
                                fontSize: "0.8rem"}}
                        onClick={() =>{
                          if(isEmptyForm)
                            setIsEmptyForm(false);
                        }}
                        onChange={(e) =>
                          handleEventFormChange(e, {space: spaces[e.target.value]})
                        }
                      >
                        {spaces?.map((item, idx) => {
                          return (
                            <option key={item._id} value={idx}>{item.name}</option>
                          )}
                        )}
                      </Input>
                    </div>
                  )}

                    <div className="form__input w-50">
                      <label htmlFor="">Precio</label>
                      <input
                        type="number"
                        name="price" 
                        placeholder="Introduzca precio ..."
                        onClick={() =>{
                          if(isEmptyForm)
                            setIsEmptyForm(false);
                        }}
                        onChange={(e) => handleEventFormChange(e, {price: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className=" d-flex align-items-center gap-4">
                    <div className="form__input w-50">
                      <label htmlFor="">Fecha de inicio</label>
                      <input 
                        type="date"
                        name="from"
                        onClick={() =>{
                          if(isEmptyForm)
                            setIsEmptyForm(false);
                        }}
                        onChange={(e) => handleEventFormChange(e, {from: e.target.value})} 
                      />
                    </div>

                    <div className="form__input w-50">
                      <label htmlFor="">Fecha de finalización</label>
                      <input 
                        type="date"
                        name="to"
                        onClick={() =>{
                          if(isEmptyForm)
                            setIsEmptyForm(false);
                        }}
                        onChange={(e) => handleEventFormChange(e, {to: e.target.value})} 
                      />
                    </div>
                  </div>

                  <div className=" d-flex align-items-center gap-4">
                    <div className="form__input w-50">
                      <label htmlFor="">Hora de inicio</label>
                      <input 
                        type="time"
                        name="startH"
                        onClick={() =>{
                          if(isEmptyForm)
                            setIsEmptyForm(false);
                        }}
                        onChange={(e) => handleEventFormChange(e, {startH: e.target.value})} 
                      />
                    </div>

                    <div className="form__input w-50">
                      <label htmlFor="">Hora de finalización</label>
                      <input 
                        type="time"
                        name="endH"
                        onClick={() =>{
                          if(isEmptyForm)
                            setIsEmptyForm(false);
                        }}
                        onChange={(e) => handleEventFormChange(e, {endH: e.target.value})} 
                      />
                    </div>
                  </div>
                  
                </form>
                <div className="mt-4" style={{float: "right"}}>
                  {isEmptyForm && 
                    <p className='m-0 mb-3 text-center' style={{color: 'red'}}>Fields cannot be blank</p>
                  }
                  <button
                    className="bid__btn d-flex align-items-center gap-2"
                    onClick={()=> onEventCreate()}
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
