import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
// import "../CSS/card.css";
import Card from "./Card";
function FullUser() {
  const { id } = useParams();
  const user = useSelector((state) => state.getUsers).filter(
    (obj) => obj.id == id
  )[0];
  console.log(user);
  console.log("on full users");
  return user != undefined ? (
    // <div className="card-container">
    //   <header>
    //     <img src={user.avatar} alt={user.name} />
    //   </header>
    //   <h2 className="normal-text">{"props.city"}</h2>
    //   <div className="social-container">
    //     <div className="followers">
    //       <h1 className="bold-text">{""}</h1>
    //       <h2 className="smaller-text">Followers</h2>
    //     </div>
    //     <div className="likes">
    //       <h1 className="bold-text">{""}</h1>
    //       <h2 className="smaller-text">Likes</h2>
    //     </div>
    //     <div className="photos">
    //       <h1 className="bold-text">{"props.photos"}</h1>
    //       <h2 className="smaller-text">Photos</h2>
    //     </div>
    //   </div>
    // </div>
    // <div className="check users">
    //   <h1>Hello world</h1>
    <Card user={user} />
  ) : (
    // </div>
    // <h1>on full users............</h1>
    ""
  );
}

export default FullUser;
