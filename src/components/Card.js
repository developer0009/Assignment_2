import React from "react";
import "../CSS/card.css";
function Card({ user }) {
  return (
    <div className="card-container">
      <header>
        <img src={user.avatar} alt={user.name} className="card header" />
      </header>
      <h1 className="bold-text">
        {user.first_name} {user.last_name}
        <span className="normal-text"></span>
      </h1>
      <h2 className="bold-text desc">
        {" "}
        Description :{" "}
        <span className="normal-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
          temporibus quos alias aperiam pariatur architecto soluta modi fuga
          eaque cum praesentium obcaecati porro aliquid facere minus quam
          expedita nesciunt. Commodi?
        </span>
      </h2>
      <div className="social-container">
        <div className="followers">
          <h1 className="bold-text">
            <i class="fa-solid fa-user"></i>
          </h1>
          <h2 className="smaller-text">{user.first_name}</h2>
        </div>
        <div className="likes">
          <h1 className="bold-text">
            <i class="fa-solid fa-share"></i>
          </h1>
          <h2 className="smaller-text">{user.email}</h2>
        </div>
        <div className="photos">
          <h1 className="bold-text">
            <i class="fa-solid fa-sliders"></i>
          </h1>
          <h2 className="smaller-text">{user.id}</h2>
        </div>
      </div>
    </div>
  );
}

export default Card;
