import { useState } from "react";
import Form from "../../ui/Form";
import FormRowVertical from "../../ui/FormRowVertical";
import Input from "../../ui/Input";
import Button from "../../ui/Button";

function LoginForm() {
  const [email, setEmail] = useState("yang@example.com");
  const [password, setPassword] = useState("2023");

  function handleSubmit(e) {
    e.preventDefault()
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label="Email">
        <Input
          type="email"
          id="email"
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormRowVertical>
      <FormRowVertical label="Password">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button size="large">Login</Button>
      </FormRowVertical>
    </Form>
  );
}

export default LoginForm;
