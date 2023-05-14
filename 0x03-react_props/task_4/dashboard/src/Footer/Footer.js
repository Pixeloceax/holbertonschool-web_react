import React from "react";
import { getFullYear, getFooterCopy } from "../utils/utils";
import "./Footer.css";

const Footer = () => {
  const isIndex = true;

  return (
    <>
      <div className="App-footer">
        <p>
          {getFullYear()} - {getFooterCopy(isIndex)}
        </p>
      </div>
    </>
  );
};

export default Footer;
