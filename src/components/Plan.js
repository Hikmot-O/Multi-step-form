import React from "react";
import arcade from "../assets/images/icon-arcade.svg";
import advanced from "../assets/images/icon-advanced.svg";
import pro from "../assets/images/icon-pro.svg";
import "../styles/Plan.css";

const Plan = () => {
  return (
    <div className="plan-section">
      <h3>Select your plan</h3>
      <p>You have the option of monthly or yearly billing.</p>

      <div className="plans">
        <div className="plan">
          <img src={arcade} alt="arcade icon" />
          <div>
            <p className="type">Arcade</p>
            <p className="price">$90/yr</p>
            <p className="free">2 months free</p>
          </div>
        </div>
        <div className="plan">
          <img src={advanced} alt="advanced icon" />
          <div>
            <p className="type">Advanced</p>
            <p className="price">$120/yr</p>
            <p className="free">2 months free</p>
          </div>
        </div>
        <div className="plan">
          <img src={pro} alt="pro icon" />
          <div>
            <p className="type">Pro</p>
            <p className="price">$150/yr</p>
            <p className="free">2 months free</p>
          </div>
        </div>
      </div>

      <div className="duration">
        <p>Monthly</p>
        <div className="switch">
          <div className="switch-btn"></div>
        </div>
        <p>Yearly</p>
      </div>
    </div>
  );
};

export default Plan;
