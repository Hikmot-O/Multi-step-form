import React, { useContext, useState, useEffect } from "react";
import AuthContext from "../store/auth-context";
// import checkmark from "../assets/images/icon-checkmark.svg";
import "../styles/AddOns.css";

// let monthly;
// console.log(monthly);

const AddOns = () => {
  const ctx = useContext(AuthContext);

 

  const ADDONS_DATA = [
    {
      id: "addon-1",
      title: "Online service",
      perk: "Access to multiplayer games",
      price: ctx.monthlyPlan ? "+$1/mo" : "+$10/yr",
      checked: false,
    },
    {
      id: "addon-2",
      title: "Larger storage",
      perk: "Extra 1TB of cloud save",
      price: ctx.monthlyPlan ? "+$2/mo" : "+$20/yr",
      checked: false,
    },
    {
      id: "addon-3",
      title: "Customizable profile",
      perk: "Custom theme on your profile",
      price: ctx.monthlyPlan ? "+$3/mo" : "+$30/yr",
      checked: false,
    },
  ];

  const [DATA, setDATA] = useState(ADDONS_DATA);
  let test = ctx.addOns.length === 0 ? DATA : ctx.addOns
  // useEffect(()=>{
  //   ctx.addonsHandler(DATA)
  // },[DATA])
  // const [selectedADDONS, setSelectedADDONS] = useState([]);
  const addonsHandler = (id) => {
    const selectedAddOn = test.findIndex((addon) => addon.id === id);
    console.log(selectedAddOn)

    if (selectedAddOn === undefined) return;

    let newAddOn = [...test];

    newAddOn[selectedAddOn] = {
      ...newAddOn[selectedAddOn],
      checked: !test[selectedAddOn].checked,
    };

    setDATA(newAddOn);
    // ctx.addonsHandler(newAddOn.filter((addon) => addon.checked === true));
    ctx.addonsHandler(newAddOn);
    console.log(newAddOn);
    console.log('m00000')
    // ctx.addonsHandler(id);
  };
  // setChecked(!checked);
  // }

  // let test;
  // if(ctx.addOns.length === 0){
  //   test = DATA
  // }else{
  //   test = ctx.addOns
  // }
// useEffect(() => {}, [])
// let test = ctx.addOns.length === 0 ? DATA : ctx.addOns
return (
    <div className="addOns-section">
      <h3>Pick add-ons</h3>
      <p>Add-ons help enhance your gaming experience.</p>

      {test.map((addon) => (
        <div
          onClick={() => addonsHandler(addon.id)}
          key={addon.id}
          className={addon.checked === true ? "addOns addOns-selected" : "addOns"}
        >
          <div className="addOns-left">
            <input
              // className={addon.checked ? "input-selected" : ""}
              onChange={() => addonsHandler(addon.id)}
              checked={addon.checked}
              type="checkbox"
            />
            <div>
              <p>{addon.title}</p>
              <p>{addon.perk}</p>
            </div>
          </div>
          <p className="price">{addon.price}</p>
        </div>
      ))}
      {/* <div className="addOns">
        <div className="addOns-left">
          <input type="checkbox" /> */}
      {/* <img src={checkmark} alt="checkmark icon" /> */}
      {/* <div>
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
      </div> */}
    </div>
  );
};

export default AddOns;
