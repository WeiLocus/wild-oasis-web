import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Button from "../../ui/Button";

function UpdatePasswordForm() {
  return (
    <Form>
      <FormRow label="New password (min 8 chars)">
        <Input type="password" id="password" autoComplete="current-password" />
      </FormRow>
      <FormRow label="Confirm password">
        <Input
          type="password"
          id="passwordConfirm"
          autoComplete="new-password"
        />
      </FormRow>
      <FormRow>
        <Button
          variation="secondary"
          type="reset"
        >
          Cancel
        </Button>
        <Button>Update password</Button>
      </FormRow>
    </Form>
  );
}

export default UpdatePasswordForm;
