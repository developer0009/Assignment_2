import React from "react";
import { Link } from "react-router-dom";
function User({ user }) {
  return (
    <Link to={`/user/${user.id}`} type="button" className="link-user">
      <div className="user">
        <img src={user.avatar} alt={`${user.id}`} className="card" />
        <h4>{user.first_name}</h4>
        {/* div,const first = useContext(second); */}
        <div className="content ">
          <span>
            <i className="fa-solid fa-user"></i> : {user.first_name}
          </span>
          <span className="email">
            <i class="fa-solid fa-share"></i> : {user.email}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default User;
