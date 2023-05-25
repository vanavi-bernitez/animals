import React from "react";

const GeneralInfo = ({srcData}) => {
  return (
    <div className="generalInfo">
      <h2>{srcData.name}</h2>
      <p>Height: {srcData.height}</p>
      <p>Gender: {srcData.gender}</p>
      <p>Birth year: {srcData.birthYear}</p>
    </div>
  );
};

export { GeneralInfo };
