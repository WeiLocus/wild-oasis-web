import styled from "styled-components";
import { useDarkMode } from "../context/DarkModeContext";
import LogoLight from "/logo-light.png"
import LogoDark from "/logo-dark.png";
import { breakpoint } from "../styles/GlobalStyles";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  width: auto;
  height: 9.6rem;

  @media screen and (max-width: ${breakpoint.md}) {
    display: none;
  }
`;
function Logo() {
  const {isDarkMode} = useDarkMode()
  const src = isDarkMode
    ? LogoDark
    : LogoLight
  return (
    <StyledLogo>
      <Img src={src} alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
