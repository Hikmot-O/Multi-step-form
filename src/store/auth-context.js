import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AuthContext = React.createContext({
  pages: [],
  currentPage: 1,
  fowardPagination: () => {},
  backwardPagination: () => {},
  info: {},
  plan: {},
  addOns: [],
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
  //   const [infoIsValid, setInfoIsValid] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const location = useLocation();
  let path = location.pathname;
  const navigate = useNavigate();

  useEffect(() => {
    for (let i = 0; i < PAGES.length; i++) {
      if (PAGES[i].href === path) {
        setCurrentPage(PAGES[i].label);
      }
    }
  }, [path]);

  const fowardPaginationHandler = () => {
    for (let i = 0; i < PAGES.length; i++) {
      if (PAGES[i].label === currentPage) {
        //for last page
        if (!PAGES[i + 1]) return;

        //for other pages
        navigate(PAGES[i + 1].href);
      }
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
        fowardPagination: fowardPaginationHandler,
        backwardPagination: backwardPaginationHandler,
        info: {},
        plan: {},
        addOns: [],
        summary: {},
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
