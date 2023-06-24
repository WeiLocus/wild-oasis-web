import { GlobalStyle } from "./styles/GlobalStyles"
import Heading from "./ui/Heading";
import Button from "./ui/Button";
import Input from "./ui/Input"

function App() {

  return (
    <>
      <GlobalStyle />
      <Heading as="h1">The Wild Oasis</Heading>
      <Heading as="h2">Check in and out</Heading>
      <Button >check in</Button>
      <Button>check out</Button>
      <Heading as="h3">Form</Heading>
      <Input type="number" placeholder="number of guest"></Input>
    </>
  );
}

export default App
