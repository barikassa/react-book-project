import React from "react";
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";

const Detailes = ({ detailesData, setDetailesData }) => {
  return (
    <div>
      {detailesData ? (
        <>
          <img src={detailesData.imgUrl} alt="" />
          <p> {detailesData.title} </p>
          <p>{detailesData.description}</p>
        </>
      ) : (
        <Redirect to="/BookList" />
      )}

      <button
        onClick={() => {
          setDetailesData(null);
        }}
      >
        back
      </button>
    </div>
  );
};

export default Detailes;
