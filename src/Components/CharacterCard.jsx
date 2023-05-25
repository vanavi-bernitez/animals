import React, { useState } from "react";
import { getCharacter } from "../helpers/getCharacter";
import { SubmitButton } from "./SubmitButton";
import { AvatarImg } from "./AvatarImg";
import { GeneralInfo } from "./GeneralInfo";
import { SpecificInfo } from "./SpecificInfo";
import avatarSource from "../helpers/imagesObject"

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
          <GeneralInfo srcData={data}/>
          <SpecificInfo srcData={data} />
          <SubmitButton handleOnClick={handleClick} />
        </div>
        <AvatarImg srcImage={sourceImage} />
      </div>
    </div>
  );
};

export { CharacterCard };
