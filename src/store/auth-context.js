import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import arcade from "../assets/images/icon-arcade.svg";
import advanced from "../assets/images/icon-advanced.svg";
import pro from "../assets/images/icon-pro.svg";

const AuthContext = React.createContext({
  pages: [],
  currentPage: 1,
  infoIsValid: false,
  nameInputHandler: () => {},
  emailInputHandler: () => {},
  phoneInputHandler: () => {},
  infoSubmitHandler: () => {},
  fowardPagination: () => {},
  backwardPagination: () => {},
  info: {},
  plan: {},
  selectedPlan: "",
  planHandler: () => {},
  switchHandler: () => {},
  planSubmitHandler: () => {},
  monthlyPlan: false,
  addOns: [],
//   selectedAddons: [],
  addonsHandler: () => {},
  addonsSubmitHandler: () => {},
  summary: {},
});

const PAGES = [
  {
    href: "/info",
    label: 1,
  },
  {
    href: "/plans",
    label: 2,
  },
  {
    href: "/add-ons",
    label: 3,
  },
  {
    href: "/summary",
    label: 4,
  },
  {
    href: "/thankyou",
    label: 5,
  },
];

export const AuthContextProvider = (props) => {
  const [ismonthlyPlan, setIsMonthlyPlan] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");

  const [selectedAddons, setSelectedAddons] = useState([]);
  const plans = {
    items: [
      {
        id: "plan-1",
        src: arcade,
        type: "Arcade",
        price: ismonthlyPlan ? "$9/mo" : "$90/yr",
        free: "2 months free",
      },
      {
        id: "plan-2",
        src: advanced,
        type: "Advanced",
        price: ismonthlyPlan ? "$12/mo" : "$120/yr",
        free: "2 months free",
      },
      {
        id: "plan-3",
        src: pro,
        type: "Pro",
        price: ismonthlyPlan ? "$15/mo" : "$150/yr",
        free: "2 months free",
      },
    ],
  };

  const ADDONS_DATA = [
    {
      id: "addon-1",
      title: "Online service",
      perk: "Access to multiplayer games",
      price: ismonthlyPlan ? "+$1/mo" : "+$10/yr",
      checked: false,
    },
    {
      id: "addon-2",
      title: "Larger storage",
      perk: "Extra 1TB of cloud save",
      price: ismonthlyPlan ? "+$2/mo" : "+$20/yr",
      checked: false,
    },
    {
      id: "addon-3",
      title: "Customizable profile",
      perk: "Custom theme on your profile",
      price: ismonthlyPlan ? "+$3/mo" : "+$30/yr",
      checked: false,
    },
  ];

  const [infoIsValid, setInfoIsValid] = useState(false);
  const [enteredInfo, setEnteredInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const location = useLocation();
  let path = location.pathname;
  const navigate = useNavigate();

  const infoSubmitHandler = () => {
    const emailRegExp = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;
    const phoneRegExp =
      /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
      console.log('yayy')
    if (
      enteredInfo.name !== "" &&
      emailRegExp.test(enteredInfo.email) === true &&
      phoneRegExp.test(enteredInfo.phone) === true
    ) {
      setInfoIsValid(true);

      fowardPaginationHandler();
    } else {
      setInfoIsValid(false);
    }
  };

  const nameInputHandler = (val) => {
    setEnteredInfo({
      ...enteredInfo,
      name: val,
    });
  };
  const emailInputHandler = (val) => {
    setEnteredInfo({
      ...enteredInfo,
      email: val,
    });
  };
  const phoneInputHandler = (val) => {
    setEnteredInfo({
      ...enteredInfo,
      phone: val,
    });
  };

  ///Plan
  const planHandler = (plan) => {
    setSelectedPlan(plan);
  };

  const switchHandler = () => {
    setIsMonthlyPlan(!ismonthlyPlan);
    setSelectedPlan("");
    setSelectedAddons([]);
  };

  const planSubmitHandler = () => {
    if (selectedPlan !== "") {
      // console.log(('yesss'))
      fowardPaginationHandler();
    } else return;
  };

//   const [ADDONS, setADDONs] = useState([])

  const [DATA, setDATA] = useState(ADDONS_DATA);
//   const [storedADDONS, setStoredADDONS] = useState([])
  const storedADDONS = selectedAddons.filter((addon) => addon.checked === true)
  //Addons
  console.log(storedADDONS)
  const addonsHandler = (addons) => {
      setSelectedAddons(addons);
      
    //   setStoredADDONS(selectedAddons.filter((addon) => addon.checked === true))

    

    // const selectedAddOn = DATA.findIndex((addon) => addon.id === id);

    // if (selectedAddOn === undefined) return;

    // let newAddOn = [...DATA];

    // newAddOn[selectedAddOn] = {
    //   ...newAddOn[selectedAddOn],
    //   checked: !DATA[selectedAddOn].checked,
    // };

    // setDATA(newAddOn);
    // setSelectedAddons(DATA.filter((addon) => addon.checked === true));
    // console.log(newAddOn);
  };

  const addonsSubmitHandler = () => {
    // if (selectedAddons.length !== 0) {
    //   fowardPaginationHandler(); newAddOn.filter((addon) => addon.checked === true)
    selectedAddons.map((addon) => {
        if(addon.checked === true){

            fowardPaginationHandler();
            return
        }else return;})
    // if (selectedAddons.length !== 0) {
    // } else return;
  };

  //Pagination
  useEffect(() => {
    for (let i = 0; i < PAGES.length; i++) {
      if (PAGES[i].href === path) {
        setCurrentPage(PAGES[i].label);
      }
    }
  }, [path]);

  const fowardPaginationHandler = () => {
    for (let i = 0; i < PAGES.length; i++) {
      if (PAGES[i].label === currentPage && PAGES[i + 1]) {
        //for last page
        // if (!PAGES[i + 1]) return;

        //for other pages
        console.log(PAGES[i + 1].href);
        navigate(PAGES[i + 1].href);
        return;
      } else console.log(PAGES[i].label, currentPage); //else return;
    }

    setCurrentPage((oldVal) => (oldVal += 1));
  };

  const backwardPaginationHandler = () => {
    for (let i = 0; i < PAGES.length; i++) {
      if (PAGES[i].label === currentPage) {
        if (!PAGES[i - 1]) return;

        navigate(PAGES[i - 1].href);
      }
    }
    setCurrentPage((oldVal) => (oldVal -= 1));
  };

  return (
    <AuthContext.Provider
      value={{
        pages: PAGES,
        currentPage,
        infoIsValid: infoIsValid,
        nameInputHandler: nameInputHandler,
        emailInputHandler: emailInputHandler,
        phoneInputHandler: phoneInputHandler,
        infoSubmitHandler: infoSubmitHandler,
        fowardPagination: fowardPaginationHandler,
        backwardPagination: backwardPaginationHandler,
        info: enteredInfo,
        plan: plans,
        selectedPlan: selectedPlan,
        planHandler: planHandler,
        switchHandler: switchHandler,
        planSubmitHandler: planSubmitHandler,
        monthlyPlan: ismonthlyPlan,
        // addOns: DATA,
        // selectedAddons: selectedAddons,
        addOns: selectedAddons,
        addonsHandler: addonsHandler,
        addonsSubmitHandler: addonsSubmitHandler,
        summary: {},
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
