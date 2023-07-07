import Form from "../../ui/Form"
import FormRow from "../../ui/FormRow"
import Input from "../../ui/Input"
import Button from "../../ui/Button"
import FileInput from "../../ui/FileInput";

function UpdateUserDataForm() {
  return (
    <Form>
      <FormRow label="Email">
        <Input />
      </FormRow>
      <FormRow label="Full name">
        <Input />
      </FormRow>
      <FormRow label="Avatar image">
        <FileInput />
      </FormRow>
      <FormRow>
        <Button variation="secondary" type="reset">Cancel</Button>
        <Button>Update account</Button>
      </FormRow>
    </Form>
  );
}

export default UpdateUserDataForm
