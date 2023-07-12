import styled from "styled-components";
import Logo from "./Logo"
import MainNav from "./MainNav";
import { breakpoint } from "../styles/GlobalStyles";

const StyledSidebar = styled.aside`
  display: none;

  @media screen and (min-width: ${breakpoint.md}) {
    /* 佔滿第一列 */
    grid-row: 1 / -1;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    padding: 3.2rem 2.4rem;
    border-right: 1px solid var(--color-grey-100);
    background-color: var(--color-grey-0);
  }
`;

function Sidebar() {
  return <StyledSidebar>
    <Logo />
    <MainNav />
  </StyledSidebar>;
}

export default Sidebar;
