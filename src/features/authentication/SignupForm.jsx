import Form from "../../ui/Form"
import FormRow from "../../ui/FormRow"
import Input from "../../ui/Input"
import Button from "../../ui/Button";

function SignupForm() {
  return (
    <Form>
      <FormRow label="Full name">
        <Input text="text" id="fullName" />
      </FormRow>
      <FormRow label="Email">
        <Input text="email" id="email" />
      </FormRow>
      <FormRow label="Password  (min 8 characters)">
        <Input text="password" id="password" />
      </FormRow>
      <FormRow label="Repeat password">
        <Input text="password" id="passwordConfirm" />
      </FormRow>
      <FormRow>
        <Button variation="secondary" type="reset">Cancel</Button>
        <Button>Create bew user</Button>
      </FormRow>
    </Form>
  );
}

export default SignupForm
