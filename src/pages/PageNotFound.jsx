import styled from "styled-components";
import { useMoveBack } from "../hooks/useMoveBack";
import Heading from "../ui/Heading";
import Button from "../ui/Button";


const StyledPageNotFound = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 1rem;
  background-color: var(--color-grey-50);
`

function PageNotFound() {
  const moveBack = useMoveBack()
  return (
    <StyledPageNotFound>
      <Heading as="h1">
        The page you are looking for could not be found 😢
      </Heading>
      <Button onClick={moveBack} size="large">
        &larr; Go back
      </Button>
    </StyledPageNotFound>
  );
}

export default PageNotFound
