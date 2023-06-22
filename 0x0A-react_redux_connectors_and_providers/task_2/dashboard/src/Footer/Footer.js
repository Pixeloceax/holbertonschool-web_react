import React from "react";
import "./Footer.css";
import { getFooterCopy, getFullYear } from "../utils/utils";
import { connect } from "react-redux";

function Footer(props) {
  const { user } = props;

  return (
    <div className="App-footer">
      <p>
        Copyright {getFullYear()} - {getFooterCopy()}
      </p>
      {user && user.get("isLoggedIn") && (
        <p>
          <a href="/contact">Contact us</a>
        </p>
      )}
    </div>
  );
}

export const mapStateToProps = (state) => ({
  user: state.get("user"),
});

export default connect(mapStateToProps)(Footer);
