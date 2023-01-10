import React from "react";
import { Outlet, Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      {/* <div></div> */}
      <div className="steps">
        <Link className="step" to="/info">
          <div className="step-number">1</div>
          <div>
            <p>Step 1</p>
            <h5>Your Info</h5>
          </div>
        </Link>
        <Link className="step" to="/plans">
          <div className="step-number">2</div>
          <div>
            <p>Step 2</p>
            <h5>Select Plan</h5>
          </div>
        </Link>
        <Link className="step" to="/add-ons">
          <div className="step-number">3</div>
          <div>
            <p>Step 3</p>
            <h5>Add-Ons</h5>
          </div>
        </Link>
        <Link className="step" to="/summary">
          <div className="step-number">4</div>
          <div>
            <p>Step 4</p>
            <h5>Summary</h5>
          </div>
        </Link>
        {/* <button>Next Step</button> */}
      </div>
      <div className="home-right">
        <Outlet className="outlet"></Outlet>
        <div className="btn-container">
          <p>Go Back</p>
          <button>Next step</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
