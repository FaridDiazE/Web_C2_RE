import React from "react";
import './Profile.css'
import { Avatar } from "@mui/material";


export default function Profile({name, carrer}) {
  return (
    <>
      <div className="friends-card-container">
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          sx={{ width: 36, height: 36, top: 8, marginLeft: 1, marginRight: 1 }}
        />
        <div className="info-Profile">
        <p className="name-Profile">{name}</p>
        <p className="carrer-Profile">{carrer}</p>
        </div>

      </div>
    </>
  );
}
