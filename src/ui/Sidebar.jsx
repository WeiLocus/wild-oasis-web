import styled from "styled-components";

const StyledSidebar = styled.aside`
  /* 佔滿第一列 */
  grid-row: 1 / -1;
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);
  background-color: var(--color-grey-0);
`

function Sidebar() {
  return <StyledSidebar>Side</StyledSidebar>;
}

export default Sidebar;
