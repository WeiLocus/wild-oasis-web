import styled from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyles"
import Heading from "./ui/Heading";
import Button from "./ui/Button";
import Input from "./ui/Input"
import Row from "./ui/Row";

const StyledApp = styled.div`
  padding: 20px;
`;

function App() {

  return (
    <StyledApp>
      <GlobalStyle />
      <Row>
        <Row type="horizontal">
          <Heading as="h1">The Wild Oasis</Heading>
          <div>
            <Heading as="h2">Check in and out</Heading>
            <Button>check in</Button>
            <Button>check out</Button>
          </div>
        </Row>
        <Row>
          <Heading as="h3">Form</Heading>
          <form>
            <Input type="number" placeholder="number of guest"></Input>
            <Input type="number" placeholder="number of guest"></Input>
          </form>
        </Row>
      </Row>
    </StyledApp>
  );
}

export default App
