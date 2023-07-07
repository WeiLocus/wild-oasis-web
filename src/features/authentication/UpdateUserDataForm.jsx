import { useUser } from "./useUser";
import { useState } from "react";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";

function UpdateUserDataForm() {
  const { isLoading, user } = useUser();
  const {
    email,
    user_metadata: { fullName: currentFullName },
  } = user;

  const [fullName, setFullName] = useState(currentFullName);
  const [avatar, setAvatar] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    if(!fullName) return
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRow label="Email">
        <Input disabled value={email} />
      </FormRow>
      <FormRow label="Full name">
        <Input type="text" id="fullName" value={currentFullName} />
      </FormRow>
      <FormRow label="Avatar image">
        <FileInput id="avatar" accept="image/*" />
      </FormRow>
      <FormRow>
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button>Update account</Button>
      </FormRow>
    </Form>
  );
}

export default UpdateUserDataForm;
