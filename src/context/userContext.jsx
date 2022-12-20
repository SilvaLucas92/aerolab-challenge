import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [status, setStatus] = "pending";
  const url = "https://coding-challenge-api.aerolab.co/user/me";
  const TOKEN =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzljOWMxNjU2NDAxYTAwMjEwZjdjNDgiLCJpYXQiOjE2NzEyMDc5NTh9.w6gcLbKyxHgMraak-eFBfQSHDXEOHf_o13C2Nk-wcI8";
  useEffect(() => {
    fetch(url, {
      headers: {
        Authorization: TOKEN,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  }, [url]);

  const handlePoints = (amount, pdt) => {
    return setUser({
      ...user,
      points: user.points - amount,
      redeemHistory: [...user.redeemHistory, pdt],
    });
  };

  return (
    <AppContext.Provider
      value={{
        user,
        handlePoints,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
