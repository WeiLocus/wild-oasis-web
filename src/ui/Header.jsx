import styled from "styled-components";
import HeaderMenu from "./HeaderMenu";

const StyledHeader = styled.header`
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
  border-right: 1px solid var(--color-grey-100);
`;

function Header() {
  return (
    <StyledHeader>
      <HeaderMenu />
    </StyledHeader>
  );
}

export default Header;
