import React, { useState } from "react";

import { useSelector, useDispatch } from 'react-redux';

import { Input } from "reactstrap";

export function Modal ({setModalHandler}) {

  const {
    messages
  } = useSelector((state) => state.language);

  const [scheduleForm, setscheduleForm] = useState({
    subject: "",
    email: "",
    schedule: "",
    observations: ""
  });
  
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

        <div className="input__item mb-4">
          <h6>{messages.scheduleFormSubject}</h6>
          <input type="text" placeholder={messages.scheduleFormSubjectPlaceholder} />
        </div>

        <div className="input__item mb-4">
          <h6>Email</h6>
          <input type="text" placeholder={messages.scheduleFormEmailPlaceholder} />
        </div>

        <div className="input__item mb-3">
          <h6>{messages.scheduleFormSelectTime}</h6>
          <Input
            id="exampleTime"
            name="time"
            placeholder="time placeholder"
            type="time"
            style={{border: "1px solid #eb6262", colorScheme: "dark"}}
            onChange={(e) => console.log(e, {startH: e.target.value})} 
          />
        </div>

        <div className="input__item mb-3">
          <h6>{messages.scheduleFormObservations}</h6>
          <textarea 
            style={{ width: "100%", 
                     height: "80px", 
                     border: "1px solid #eb6262", 
                     fontSize: "0.8rem",
                     padding: "10px 0px 0px 20px"
                  }} 
            placeholder={messages.scheduleFormObservationsPlaceholder} />
        </div>

        <button className="place__bid-btn">
          <i className="me-2 ri-calendar-event-line"/>
          {messages.scheduleFormButton}
        </button>
      </div>
    </div>
    // <div className="modal__wrapper">
    //   <div className="single__modal" style={{width: 310, height: "auto", padding: 0}}>
    //     <span className="close__modal"
    //           onClick={() => setModalHandler(false)}>
    //       <i className="ri-close-line" />
    //     </span>
    //     <Form>
    //       <FormGroup className="w-50">
    //         <Label for="exampleTime">
    //           Seleccione una hora
    //         </Label>
    //         <Input
    //           id="exampleTime"
    //           name="time"
    //           placeholder="time placeholder"
    //           type="time"
    //           style={{colorScheme: "dark"}}
    //           onChange={(e) => console.log(e, {startH: e.target.value})} 
    //         />
    //       </FormGroup>
    //     </Form>
    //   </div>
    // </div>
  );
};
