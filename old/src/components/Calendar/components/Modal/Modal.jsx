import React, { useState, useRef } from "react";

import { useSelector } from 'react-redux';

import emailjs from '@emailjs/browser';

import moment from "moment";

export function Modal ({dateSelected, setModalHandler}) {

  const form = useRef();

  const { REACT_APP_EMAIL_SERVICE_ID, REACT_APP_EMAIL_SCHEDULE_TEMPLATE_ID, REACT_APP_EMAIL_PUBLIC_KEY } = process.env;

  const [isEmptyForm, setIsEmptyForm] = useState(false);
  const [submitButton, showSubmitButton] = useState(false);

  const {
    messages
  } = useSelector((state) => state.language);

  const [scheduleForm, setScheduleForm] = useState({
    name: "",
    email: "",
    schedule_time: "",
    message: ""
  });
  
  const handleScheduleFormChange = (e) => {    
    const {name, value} = e.target;

    setScheduleForm((prev) => {
      prev[name] = value;

      return prev;
    });
  };

  const onSendEmail = async (e) => {
    e.preventDefault();
    const checkProperties = Object.values(scheduleForm).every(el => el !== '');

    if(checkProperties){
      emailjs.sendForm(REACT_APP_EMAIL_SERVICE_ID, REACT_APP_EMAIL_SCHEDULE_TEMPLATE_ID, form.current, REACT_APP_EMAIL_PUBLIC_KEY)
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
    <div className="modal__wrapper">
      <div className="single__modal">
        <span className="close__modal mt-2 me-2">
          <i className="ri-close-line" 
             style={{background: "transparent", fontSize: 20}}
             onClick={() => setModalHandler(false)}></i>
        </span>
        <h5 className="text-center text-dark">{messages.scheduleFormTitle}</h5>
        <p className="text-center text-dark">
          {messages.scheduleFormSubtitle}
        </p>
        <form className="mt-2" ref={form} onSubmit={onSendEmail}>
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
                onChange={(e) => handleScheduleFormChange(e)} />
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
              onChange={(e) => handleScheduleFormChange(e)}
            />
          </div>
          <div className=" d-flex align-items-center gap-4">
            <div className="form__input w-50">
              <p className="text-dark" style={{fontSize: 15, marginBottom: 2}}>
                {messages.scheduleFormSelectDate}
              </p>
              <input
                id="exampleDate"
                name="schedule_date"
                readOnly
                placeholder="date placeholder"
                defaultValue={moment(dateSelected).format("DD-MM-YYYY")}
                style={{backgroundColor: "#dfdfdf", color: "black", border: "1px solid #eb6262", colorScheme: "dark"}}
              />
            </div>

            <div className="form__input w-50">
              <p className="text-dark" style={{fontSize: 15, marginBottom: 2}}>
                {messages.scheduleFormSelectTime}
              </p>
              <input
                id="exampleTime"
                name="schedule_time"
                placeholder="time placeholder"
                type="time"
                style={{color: "black", border: "1px solid #eb6262", colorScheme: "dark"}}
                onClick={() =>{
                  if(isEmptyForm)
                    setIsEmptyForm(false);
                }}
                onChange={(e) => {
                  handleScheduleFormChange(e)
                }}
              />
            </div>
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
              onChange={(e) => handleScheduleFormChange(e)}
            ></textarea>
          </div>
          {isEmptyForm && 
              <p className='text-end' style={{color: '#eb6262', fontSize: '0.9rem'}}>{messages.fieldsBlank}</p>
          }                  
          {submitButton ?  
            (
              <span style={{alignItems: "center", 
                    justifyContent: "center", 
                    display: 'flex', 
                    margin: "0 auto", 
                    color: '#000', 
                    fontSize: '0.9rem'}}>{messages.messageSent}
                <i className="ms-2 ri-checkbox-circle-line" style={{color: 'green', fontSize: '25px'}}/>
              </span>
            )
            : (<button type="submit" className="place__bid-btn" disabled={submitButton}>
                <i className="me-2 ri-send-plane-line" />
                  { messages.scheduleFormButton }
              </button>)
          }
        </form>
      </div>
    </div>
  );
};
