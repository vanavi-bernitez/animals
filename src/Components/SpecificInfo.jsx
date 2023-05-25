import React from "react";

const SpecificInfo = ({ srcData }) => {
  return (
    <div className="specificInfo">
      <h3>PHYSICAL DESCRIPTION</h3>
      <p>Hair color: {srcData.hairColor}</p>
      <p>Skin color: {srcData.skinColor}</p>
      <p>Eye color: {srcData.eyeColor}</p>
    </div>
  );
};

export { SpecificInfo };
