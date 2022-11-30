import React, { useState } from "react";

import { useSelector, useDispatch } from 'react-redux';

import { Input } from "reactstrap";

// import {
//   sendEmail
// } from '../../redux/actions';

export function Modal ({setModalHandler}) {

  const dispatch = useDispatch();

  const {
    messages
  } = useSelector((state) => state.language);

  const [isEmptyForm, setIsEmptyForm] = useState(false);

  const [scheduleForm, setScheduleForm] = useState({
    subject: "",
    email: "",
    schedule: "",
    observations: ""
  });
  
  const handleScheduleFormChange = (e) => {    
    const {name, value} = e.target;

    setScheduleForm((prev) => {
      prev[name] = value;

      return prev;
    });
  };

  const onSendEmail = async () => {

    const { subject, email, schedule, observations}  = scheduleForm;

    const scheduleFormCopy = {subject, email, schedule};

    const checkProperties = Object.values(scheduleFormCopy).every(el => el !== '');

    if(checkProperties){
      console.log(scheduleForm);
      // dispatch(sendEmail(scheduleForm));

        setModalHandler(false)

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

        <div className="input__item mb-4">
          <h6>{messages.scheduleFormSubject} *</h6>
          <input type="text"
                 name="subject" 
                 placeholder={messages.scheduleFormSubjectPlaceholder}
                 onClick={() =>{
                  if(isEmptyForm)
                    setIsEmptyForm(false);
                }}
                onChange={(e) => handleScheduleFormChange(e)}  />
        </div>

        <div className="input__item mb-4">
          <h6>Email *</h6>
          <input type="text"
                 name="email" 
                 placeholder={messages.scheduleFormEmailPlaceholder}
                 onClick={() =>{
                  if(isEmptyForm)
                    setIsEmptyForm(false);
                 }}
                 onChange={(e) => handleScheduleFormChange(e)}  />
        </div>

        <div className="input__item mb-3">
          <h6>{messages.scheduleFormSelectTime} *</h6>
          <Input
            id="exampleTime"
            name="schedule"
            placeholder="time placeholder"
            type="time"
            style={{border: "1px solid #eb6262", colorScheme: "dark"}}
            onClick={() =>{
              if(isEmptyForm)
                setIsEmptyForm(false);
             }}
             onChange={(e) => handleScheduleFormChange(e)}
          />
        </div>

        <div className="input__item mb-3">
          <h6>{messages.scheduleFormObservations}</h6>
          <textarea
            name="observations" 
            style={{ width: "100%", 
                     height: "80px", 
                     border: "1px solid #eb6262", 
                     fontSize: "0.8rem",
                     padding: "10px 0px 0px 20px",
                     outline: "none"
                  }} 
            placeholder={messages.scheduleFormObservationsPlaceholder}
            onClick={() =>{
              if(isEmptyForm)
                setIsEmptyForm(false);
             }}
             onChange={(e) => handleScheduleFormChange(e)} />
        </div>

        {isEmptyForm && 
          <p className='text-end' style={{color: '#eb6262', fontSize: '0.9rem'}}>{messages.fieldsBlank}</p>
        }
        <button className="place__bid-btn"
                 onClick={()=> onSendEmail()}>
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
