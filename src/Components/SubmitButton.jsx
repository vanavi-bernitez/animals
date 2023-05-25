import React from "react";
import swLogo from "../images/buttonIcon.png";

const SubmitButton = ( props ) => {
  return (
    <button className="submitButton" onClick={props.onClick}>
      <img src={swLogo} alt="star wars" />
    </button>
  );
};

export { SubmitButton };
