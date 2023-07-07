import styled from "styled-components";
import { useUser } from "./useUser";

function UserAvatar() {
  const { user } = useUser();
  const { fullName, avatar} = user.user_metadata

  return <div>
    <img src={avatar || "default-user.jpg"} alt={`Avatar og ${fullName}`}/>
    <span>{fullName}</span>
  </div>;
}

export default UserAvatar;
