import React, { useContext } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import AuthContext from "../store/auth-context";
import "../styles/Home.css";

const Home = () => {
  const ctx = useContext(AuthContext);
  console.log(ctx);

  const location = useLocation();
  // console.log(location)
  let path = location.pathname;

  const fowardHandler = () => {
    // ctx.fowardPagination();
    if(path === '/info' || path === '/') ctx.infoSubmitHandler();
    
    if(path === '/plans') ctx.planSubmitHandler();

    if(path === '/add-ons') ctx.addonsSubmitHandler();

    if(path === '/summary') ctx.fowardPagination();

    // if(path === '/thankyou') return;
  };

  const backwardHandler = () => {
    ctx.backwardPagination();
  };

  return (
    <div className="home">
      {/* <div></div> */}
      <div className="steps">
        <div className="step" /*to="/info"*/>
          <div className={path === '/info' || path === '/' ? "step-number-active step-number" : "step-number"}>1</div>
          <div>
            <p>Step 1</p>
            <h5>Your Info</h5>
          </div>
        </div>
        <div className="step" /*to={ctx.selectedPlan || ctx.infoIsValid ? "/plans" : '/info'}*/>
          <div className={path === '/plans' || path === '/' ? "step-number-active step-number" : "step-number"}>2</div>
          <div>
            <p>Step 2</p>
            <h5>Select Plan</h5>
          </div>
        </div>
        <div className="step" /*to={ctx.addOns || (ctx.infoIsValid && ctx.selectedPlan) ? "/add-ons" : '/info'}*/>
          <div className={path === '/add-ons' || path === '/' ? "step-number-active step-number" : "step-number"}>3</div>
          <div>
            <p>Step 3</p>
            <h5>Add-Ons</h5>
          </div>
        </div>
        <div className="step" /*to={(ctx.infoIsValid && ctx.selectedPlan && ctx.addOns) ? "/summary" : '/info'}*/>
          <div className={path === '/summary' || path === '/' ? "step-number-active step-number" : "step-number"}>4</div>
          <div>
            <p>Step 4</p>
            <h5>Summary</h5>
          </div>
        </div>
        {/* <button>Next Step</button> */}
      </div>
      <div className="home-right">
        <Outlet className="outlet"></Outlet>
        <div className="btn-container">
          {ctx.currentPage !== 1 && ctx.currentPage !== ctx.pages.length && <p onClick={backwardHandler}>Go Back</p>}
          {ctx.currentPage !== ctx.pages.length && (
            <button onClick={fowardHandler}>
              {ctx.currentPage === ctx.pages.length - 1
                ? "Confirm"
                : "Next step"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
