import styled from "styled-components";
import { useUser } from "./useUser";

const StyledUserAvatar = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  color: var(--color-grey-600);
  font-weight: 500;
  font-size: 1.4rem;
`

const Avatar = styled.img`
  display: block;
  width: 4rem;
  height: 3.8rem;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  border: 2px solid var(--color-grey-100);
`

function UserAvatar() {
  const { user } = useUser();
  const { fullName, avatar} = user.user_metadata

  return <StyledUserAvatar>
    <Avatar src={avatar || "default-user.jpg"} alt={`Avatar og ${fullName}`}/>
    <span>{fullName}</span>
  </StyledUserAvatar>;
}

export default UserAvatar;
