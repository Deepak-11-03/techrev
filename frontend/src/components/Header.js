import React from "react";
// import { Link } from "react-router-dom";
import "./Header.css";
export default function Header() {
  return (
   <div>
     <div className="header">
      <h3>Project Name</h3>
      <div className="admin">
        <h5>Customer Admin</h5>
        <div>
          <img
            className="profile"
            src="https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"
            alt="profile"
          />
          <span>user01</span>
        </div>
      </div>
    </div>
   
   </div>
  );
}
