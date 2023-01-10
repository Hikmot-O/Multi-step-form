import React from "react";
import { Link } from "react-router-dom";
import '../styles/Summary.css';

const Summary = () => {
  return <div className="summary-section">
    <h3>Finishing up</h3>
    <p>Double-check everything looks OK before comfirming.</p>

    <div className="summary">
      <div className="Summary-plan">
        <div>
          <p>Arcade (Monthly)</p>
          <Link to='/plans' className="link">Change</Link>
        </div>
        <p>$9/mo</p>
      </div>
      <div className="summary-addOns">
        <p>Online service</p>
        <p>+$1/mo</p>
      </div>
      <div className="summary-addOns">
        <p>Larger storage</p>
        <p>+$2/mo</p>
      </div>
    </div>
    <div className="summary-total">
      <p>Total (per month)</p>
      <p>+$12/mo</p>
    </div>
  </div>;
};

export default Summary;
