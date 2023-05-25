import React, { useState } from "react";
import { getCharacter } from "../helpers/getCharacter";
import { SubmitButton } from "./SubmitButton";

import naImg from "../images/na.png";
import manImg from "../images/man.png";
import womanImg from "../images/woman.png";

const avatarSource = {
  naImg,
  manImg,
  womanImg,
};

let sourceImage;

const CharacterCard = () => {
  const [data, setData] = useState({});

  const fillCharacterCard = async () => {
    const id = Math.floor(Math.random() * 86) + 1;
    const characterData = await getCharacter(id);
    setData(characterData);
  };

  if (data.gender === "male") {
    sourceImage = avatarSource.manImg;
  } else if (data.gender === "female") {
    sourceImage = avatarSource.womanImg;
  } else {
    sourceImage = avatarSource.naImg;
  }

  if (Object.keys(data).length === 0) fillCharacterCard();

  const handleClick = () => fillCharacterCard();

  return (
    <div className="backGround">
      <div className="characterCard">
        <div className="information">
          <div className="generalInfo">
            <h2>{data.name}</h2>
            <p>Height: {data.height}</p>
            <p>Gender: {data.gender}</p>
            <p>Birth year: {data.birthYear}</p>
          </div>

          <div className="specificInfo">
            <p>Hair color: {data.hairColor}</p>
            <p>Skin color: {data.skinColor}</p>
            <p>Eye color: {data.eyeColor}</p>
          </div>
          <SubmitButton onClick={handleClick} />
        </div>
        <div className="avatarContainer">
          <img src={sourceImage} alt="Star wars avatar" />
        </div>
      </div>
    </div>
  );
};

export { CharacterCard };
