import React, { useContext } from "react";
import UserCard from "../Card";
// import UserProvider from '../Context/UserContext';

import { UserContext, UserConsumer } from "../Context/UserContext";

function UserContainer(props) {
  const { userContext } = useContext(UserContext);
  const data = userContext.users;
  // console.log(UserConsumer);

  let items = Object.keys(data).map((key, index) => (
    <UserCard key={index} item={key} index={index} value={data[key]} />
  ));

  return (
    <UserConsumer>
      {props => {
        console.log("dsa",props)
        return <div props={props} className="card__container">
          {data ? items : "-"}
        </div>;
      }}
    </UserConsumer>
  );
}

export default UserContainer;
