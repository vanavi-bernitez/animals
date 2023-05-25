import React from "react";
import swLogo from "../images/buttonIcon.png";

const SubmitButton = ( {handleOnClick} ) => {
  return (
    <button className="submitButton" onClick={handleOnClick}>
      <img src={swLogo} alt="star wars" />
    </button>
  );
};

export { SubmitButton };
