import styled from "styled-components";

const StyledLogo = styled.div`
  text-align: center;
`;

const LogoImage = "../../public/logo-light.png";

const Img = styled.img`
  width: auto;
  height: 9.6rem;
`;
function Logo() {
  return (
    <StyledLogo>
      <Img src={LogoImage} alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
