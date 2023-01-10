import React from "react";
import thankyou from "../assets/images/icon-thank-you.svg";
import "../styles/Thankyou.css";

const Thankyou = () => {
  return (
    <div className="thankyou">
      <img src={thankyou} alt='thank you icon' />
      <h3>Thank you!</h3>
      <p>Thanks for comfirming your subscription! We hope you have fun using our platform. If you ever need support, feel free to email us at support@loremgaming.com</p>
    </div>
  );
};

export default Thankyou;
