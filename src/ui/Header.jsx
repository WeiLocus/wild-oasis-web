import styled from "styled-components";
import HeaderMenu from "./HeaderMenu";
import UserAvatar from "../features/authentication/UserAvatar";

const StyledHeader = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 1.2rem 4.8rem;
  gap: 2rem;
  background-color: var(--color-grey-0);
  border-bottom: 1px solid var(--color-grey-100);
`;

function Header() {
  return (
    <StyledHeader>
      <UserAvatar />
      <HeaderMenu />
    </StyledHeader>
  );
}

export default Header;
