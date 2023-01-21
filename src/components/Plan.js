import React, { useContext } from "react";
// import arcade from "../assets/images/icon-arcade.svg";
// import advanced from "../assets/images/icon-advanced.svg";
// import pro from "../assets/images/icon-pro.svg";
import AuthContext from "../store/auth-context";
import "../styles/Plan.css";
const Plan = () => {
  const ctx = useContext(AuthContext);
  const planHandler = (plan) => {
    // console.log(plan)
    // ctx.selectedPlan = plan;
    console.log(ctx.selectedPlan)
    ctx.planHandler(plan)
    // selected = plan;

  };

  const switchHandler = () => {
    ctx.switchHandler();
    // console.log(selected)
    // ctx.selectedPlan = undefined

  };

  return (
    <div className="plan-section">
      <h3>Select your plan</h3>
      <p>You have the option of monthly or yearly billing.</p>

      <div className="plans">
        {ctx.plan.items.map((plan) => {
          return (
            <div onClick={()=>{planHandler(plan)}} key={plan.id} className={ctx.selectedPlan.id === plan.id? "plan plan-selected" : "plan"}>
              <img src={plan.src} alt="arcade icon" />
              <div>
                <p className="type">{plan.type}</p>
                <p className="price">{plan.price}</p>
                {!ctx.monthlyPlan && <p className="free">{plan.free}</p>}
              </div>
            </div>
          );
        })}
        {/* <div className="plan">
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
        </div> */}
      </div>

      <div className="duration">
        <p>Monthly</p>
        <div className= {ctx.monthlyPlan ?"switch switch-monthly" : "switch switch-yearly"} onClick={switchHandler}>
          <div className="switch-btn"></div>
        </div>
        <p>Yearly</p>
      </div>
    </div>
  );
};

export default Plan;
