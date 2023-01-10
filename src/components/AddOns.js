import React from "react";
// import checkmark from "../assets/images/icon-checkmark.svg";
import "../styles/AddOns.css";
const AddOns = () => {
  return (
    <div className="addOns-section">
      <h3>Pick add-ons</h3>
      <p>Add-ons help enhance your gaming experience.</p>

      {/* <div className="addOns-box"> */}
        <div className="addOns">
          <div className="addOns-left">
            <input type="checkbox" />
            {/* <img src={checkmark} alt="checkmark icon" /> */}
            <div>
              <p>Online service</p>
              <p>Access to multiplayer games</p>
            </div>
          </div>
          <p className="price">+$1/mo</p>
        </div>

        <div className="addOns">
          <div className="addOns-left">
            <input type="checkbox" />
            <div>
              <p>Larger storage</p>
              <p>Extra 1TB of cloud save</p>
            </div>
          </div>
          <p className="price">+$2/mo</p>
        </div>
        <div className="addOns">
          <div className="addOns-left">
            <input type="checkbox" />
            <div>
              <p>Customizable profile</p>
              <p>Custom theme on your profile</p>
            </div>
          </div>
          <p className="price">+$3/mo</p>
        </div>
    </div>
  );
};

export default AddOns;
