import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../store/auth-context";
import "../styles/Summary.css";

const Summary = () => {
  const ctx = useContext(AuthContext);

  let storedADDONS = ctx.addOns.filter((addon) => addon.checked === true);
  
  let PLAN_PRICE = 0;
  if (ctx.selectedPlan !== "") {
    PLAN_PRICE = +ctx.selectedPlan?.price.slice(1, -3);
  }
  let ADDONS_TOTAL = 0;
  storedADDONS?.forEach((addon) => {
    ADDONS_TOTAL += +addon.price.slice(2, -3);
  });
  console.log(ADDONS_TOTAL);
  const SUMMARY_TOTAL = PLAN_PRICE + ADDONS_TOTAL;

  return (
    <div className="summary-section">
      <h3>Finishing up</h3>
      <p>Double-check everything looks OK before comfirming.</p>

      <div className="summary">
        <div className="Summary-plan">
          <div>
            <p>Arcade ({ctx.monthlyPlan ? "Monthly" : "Yearly"})</p>
            <Link to="/plans" className="link">
              Change
            </Link>
          </div>
          {/* <p>$9/mo</p> */}
          <p>{ctx.selectedPlan.price}</p>
        </div>
        <div className="summary-addOns-box">
          {storedADDONS.map((addon) => {
            return (
              <div key={addon.id} className="summary-addOns">
                <p>{addon.title}</p>
                <p>{addon.price}</p>
              </div>
            );
          })}
        </div>
        {/* <div className="summary-addOns">
        <p>Online service</p>
        <p>+$1/mo</p>
      </div>
      <div className="summary-addOns">
        <p>Larger storage</p>
        <p>+$2/mo</p>
      </div> */}
      </div>
      <div className="summary-total">
        <p>Total (per {ctx.monthlyPlan ? "month" : "year"})</p>
        <p>
          +${SUMMARY_TOTAL}/{ctx.monthlyPlan ? "mo" : "yr"}
        </p>
      </div>
    </div>
  );
};

export default Summary;
