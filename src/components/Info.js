import React, { useContext } from "react";
import AuthContext from "../store/auth-context";
import "../styles/Info.css";

const Info = () => {
  const ctx = useContext(AuthContext);

  // const nameRef = useRef();
  // const emailRef = useRef();
  // const phoneRef = useRef();
  
  // const enteredName = nameRef.current?.value;
  // const enteredEmail = emailRef.current?.value;
  // const enteredPhone = phoneRef.current?.value
  
  const nameBlurHandler = (e) => {
    ctx.nameInputHandler(e.target.value);
  }
  
  const emailBlurHandler = (e) => {
    ctx.emailInputHandler(e.target.value);
  }
  const phoneBlurHandler = (e) => {
    ctx.phoneInputHandler(e.target.value);
  }
  return (
    <div className="info">
      <h3>Personal info</h3>
      <p>Please provide your name, email address, and phone number.</p>

      <div className="inputs">
        <div className="input-box">
          <label>Name</label>
          <input onChange={nameBlurHandler} value={ctx.info.name}  type="text" placeholder="e.g. Stephen King" />
        </div>
        <div className="input-box">
          <label>Email Address</label>
          <input onChange={emailBlurHandler} value={ctx.info.email} type="email" placeholder="e.g. stephenking@lorem.com" />
        </div>
        <div className="input-box">
          <label>Phone Number</label>
          <input onChange={phoneBlurHandler} value={ctx.info.phone} type="phone" placeholder="e.g. +1 234 567 890" />
        </div>
      </div>
    </div>
  );
};

export default Info;
