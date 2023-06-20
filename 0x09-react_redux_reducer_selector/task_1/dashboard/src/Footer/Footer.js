import React, { useContext } from "react";
import "./Footer.css";
import { getFooterCopy, getFullYear } from "../utils/utils";
import appcontext from "../App/AppContext";

function Footer() {
  const { isLoggedIn } = useContext(appcontext);

  return (
    <div className="App-footer">
      <p>
        Copyright {getFullYear()} - {getFooterCopy()}
      </p>
      {isLoggedIn && (
        <p>
          <a href="/contact">Contact us</a>
        </p>
      )}
    </div>
  );
}

export default Footer;
