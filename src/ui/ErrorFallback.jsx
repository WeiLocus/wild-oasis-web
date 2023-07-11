import styled from "styled-components"
import GlobalStyle from "../styles/GlobalStyles";
import Heading from "./Heading"

const StyledErrorFallback = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 4.8rem;
  background-color: var(--color-grey-50);
`

const Box = styled.div`
  flex: 0 1 96rem;
  text-align: center;
  padding: 4.8rem;
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  & h1 {
    margin-bottom: 1.6rem;
  }

  & p {
    margin-bottom: 3.2rem;
    color: var(--color-grey-500);
    font-family: "Sono";
  }
`;

function ErrorFallback({error}) {
  return (
    <>
      <GlobalStyle />
      <StyledErrorFallback>
        <Box>
          <Heading as="h1">Something went wrong</Heading>
          <p>{error.message}</p>
        </Box>
      </StyledErrorFallback>
    </>
  );
}

export default ErrorFallback
