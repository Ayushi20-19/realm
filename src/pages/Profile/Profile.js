import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProfileCard from "./ProfileCard";

const Profile = () => {
  const userHandle = useParams();
  const { users } = useSelector((store) => store.users);
  const [userData, setUserData] = useState();

  useEffect(() => {
    const user = users.find((user) => user._id === userHandle.profileID);
    setUserData(user || JSON.parse(localStorage.getItem("user")));
  }, [users, userHandle]);

  return (
    <div>
      <ProfileCard {...userData} />
    </div>
  );
};

export default Profile;
