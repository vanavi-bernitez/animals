import React from "react";

const AvatarImg = ({srcImage}) => {
    return (
        <div className="avatarContainer">
          <img src={srcImage} alt="Star wars avatar" />
        </div>
    )
}

export {AvatarImg}