import React from "react";
import { Background } from "./Main.styled";
import Profile from "../Profile/Profile";
import Statistics from "../Statistics/Statistics";
import FriendList from "../FriendList/FriendList";
import user from "../../bd/user.json";
import statisticalData from "../../bd/statistical-data.json";
import friends from "../../bd/friends.json";

const Main = () => {
  return (
    <Background>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />,
    </Background>
  );
};

export default Main;
