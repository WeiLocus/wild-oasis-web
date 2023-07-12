import styled from "styled-components";
import { breakpoint } from "../styles/GlobalStyles";
import {HiMenuAlt2} from "react-icons/hi"

const Checkbox = styled.input`
  display: none;

  &.nav-toggle:checked ~ ul.navbar-menu {
    opacity: 1;
    transform: scale(1, 1);
  }
`;

const Label = styled.label`
  position: absolute;
  top: 15px;
  left: 10px;

  & svg {
    width: 2.6rem;
    height: auto;
    color: var(--color-brand-600);
  }

  @media screen and (min-width: ${breakpoint.md}) {
    display: none;
  }
`;

function ToggleMenu() {
  return (
    <>
      <Checkbox type="checkbox" id="nav-toggle" className="nav-toggle" />
      <Label htmlFor="nav-toggle">
        <HiMenuAlt2 />
      </Label>
    </>
  );
}

export default ToggleMenu;
