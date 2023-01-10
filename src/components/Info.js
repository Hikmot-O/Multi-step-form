import React from "react";
import "../styles/Info.css";

const Info = () => {
  return (
    <div className="info">
      <h3>Personal info</h3>
      <p>Please provide your name, email address, and phone number.</p>

      <div className="inputs">
        <div className="input-box">
          <label>Name</label>
          <input type="text" placeholder="e.g. Stephen King" />
        </div>
        <div className="input-box">
          <label>Email Addresss</label>
          <input type="text" placeholder="e.g. stephenking@lorem.com" />
        </div>
        <div className="input-box">
          <label>Phone Number</label>
          <input type="text" placeholder="e.g. +1 234 567 890" />
        </div>
      </div>
    </div>
  );
};

export default Info;
