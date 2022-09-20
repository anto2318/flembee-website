import React, { useState } from "react";
import { useDispatch } from 'react-redux';

import { loginUser, registerUser } from '../../../redux/actions';

import { useSelector } from 'react-redux';

import "./styles.css";

export function AccountModal ({setShowModal}) {

  const {
		messages,
	} = useSelector((state) => state.language);

  const dispatch = useDispatch();

  const [signInForm, setSignInForm] = useState({
    email:'',
    password:'',
   });

   const [signUpForm, setSignUpForm] = useState({
    name:'',
    email:'',
    password:'',
    repeatPassword:'',
   });

   const [isSignInEmpty, setIsSignInEmpty] = useState(false);

   const [isSignUpEmpty, setIsSignUpEmpty] = useState(false);

  const [showSignUp, setShowSignUp] = useState(false);

  const handleSignInChange = (e) => {
    const {name, value} = e.target;

    setSignInForm((prev) => {
      prev[name] = value;

      return prev;
    });
  };

  const handleSignUpChange = (e) => {
    const {name, value} = e.target;

    setSignUpForm((prev) => {
      prev[name] = value;

      return prev;
    });
  };

  const onSignIn = () => {
    const { email, password } = signInForm;

    if(!email || !password){
      setIsSignInEmpty(true);
    }else{
      dispatch(loginUser({ email, password }));
    }  
  };

  const onSignUp = () => {
      const { name, email, password, repeatPassword } = signUpForm;

      if(!name || !email || !password){
        setIsSignUpEmpty(true);
      }else{

        if(password !== repeatPassword) { 
          console.log("Not equal")
        }
        else{
            dispatch(registerUser({ name, email, password }));
        }
      } 
  };

  const LoginComponent = () =>(
    <div className="modal__wrapper">
      <div className="single__modal">
        <span className="close__modal">
          <i className="ri-close-line" onClick={() => setShowModal(false)}></i>
        </span>
        <h3 className="text-center text-dark">{ messages.signIn }</h3>
        <p className="text-center text-dark">
          { messages.messageSignIn }
        </p>
        <div className="input__item mb-4">
          <h6>{ messages.enterEmail }</h6>
          <input 
            type="email"
            name="email"
            placeholder={ messages.yourEmail }
            onClick={() =>{
              if(isSignInEmpty)
                setIsSignInEmpty(false);
            }}
            onChange={handleSignInChange}/>
        </div>

        <div className="input__item mb-3">
          <h6>{ messages.enterPassword }</h6>
          <input 
            type="password"
            name="password"
            onClick={() =>{
              if(isSignInEmpty)
                setIsSignInEmpty(false);
            }}
            placeholder={ messages.yourPassword }
            onChange={handleSignInChange} />
        </div>

        <div className=" d-flex align-items-center justify-content-between">
          <p></p>
          <p>{ messages.forgotPassword }</p>
        </div>

        <button 
          className="place__bid-btn mb-4"
          onClick={() => onSignIn()}
        >{ messages.signIn }</button>
          {isSignInEmpty && 
            <p className='m-0 text-center' style={{color: 'red'}}>Fields cannot be blank</p>
          }
        <div 
          className=" d-flex align-items-center justify-content-center"
          onClick={()=> setShowSignUp(true)}
        >
          <p>{ messages.haveAccount }</p>
        </div>
      </div>
    </div>
  )

  const RegisterComponent = () =>(
    <div className="modal__wrapper">
      <div className="single__modal">
        <span className="close__modal">
          <i className="ri-close-line" onClick={() => setShowModal(false)}></i>
        </span>
        <h3 className="text-center text-dark">{ messages.signUp }</h3>
        <p className="text-center text-dark">
          { messages.messageSignUp }
        </p>

        <div className="input__item mb-3">
          <h6>{ messages.name }</h6>
          <input 
            type="name"
            name="name"
            placeholder="Name..."
            onClick={() =>{
              if(isSignUpEmpty)
                setIsSignUpEmpty(false);
            }}
            onChange={handleSignUpChange}/>
        </div>

        <div className="input__item mb-3">
          <h6>{ messages.enterEmail }</h6>
          <input 
            type="email"
            name="email"
            placeholder={ messages.yourEmail }
            onClick={() =>{
              if(isSignUpEmpty)
                setIsSignUpEmpty(false);
            }}
            onChange={handleSignUpChange}/>
        </div>

        <div className="input__item mb-3">
          <h6>{ messages.enterPassword }</h6>
          <input 
            type="password"
            name="password"
            onClick={() =>{
              if(isSignUpEmpty)
                setIsSignUpEmpty(false);
            }}
            placeholder={ messages.yourPassword }
            onChange={handleSignUpChange} />
        </div>

        <div className="input__item mb-3">
          <h6>{ messages.repeatPassword }</h6>
          <input 
            type="password"
            name="repeatPassword"
            onClick={() =>{
              if(isSignUpEmpty)
                setIsSignUpEmpty(false);
            }}
            placeholder={ messages.yourPassword }
            onChange={handleSignUpChange} />
        </div>
          <p></p>
          <button 
            className="place__bid-btn mb-3"
            onClick={() => onSignUp()}
          >{ messages.signUp }</button>
            {isSignUpEmpty && 
              <p className='m-0 text-center' style={{color: 'red'}}>Fields cannot be blank</p>
            }
        <div 
          className=" d-flex align-items-center justify-content-center py-3"
          onClick={()=> setShowSignUp(false)}
        >
          <p>{ messages.haveAccount2 }</p>
        </div>
      </div>
    </div>
  )

  return (
    <>
      { showSignUp ? 
        <RegisterComponent /> :
        <LoginComponent />
      }
    </>
    
  );
};