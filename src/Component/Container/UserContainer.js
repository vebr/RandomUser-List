import React, { useContext }  from "react";
import UserCard from "../Card";
// import UserProvider from '../Context/UserContext';

import {UserContext} from "../Context/UserContext";

function UserContainer(props) {

  const {userContext} = useContext(UserContext);
  const data = userContext.users; 
  console.log(data);

  let items = Object.keys(data).map((key, index) => (
    <UserCard
      key={index}
      item={key}
      index={index}
      value={data[key]}
    />
  ));

  return (
    <div className="card__container">
    { data ? items : "-"}
    </div>
  );
}

export default UserContainer;
