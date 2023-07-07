import { useUser } from "./useUser";
import { useState } from "react";
import { useUpdateUser } from "./useUpdateUser";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";

function UpdateUserDataForm() {
  const { user } = useUser();
  const {
    email,
    user_metadata: { fullName: currentFullName },
  } = user;
  const { isUpdating, updateUser } = useUpdateUser();

  const [fullName, setFullName] = useState(currentFullName);
  const [avatar, setAvatar] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    if (!fullName) return;
    updateUser({ fullName, avatar}, {
      onSuccess: () => {
        setAvatar(null)
        e.target.reset()
      }
    })
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRow label="Email">
        <Input disabled value={email} />
      </FormRow>
      <FormRow label="Full name">
        <Input
          type="text"
          id="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          disabled={isUpdating}
        />
      </FormRow>
      <FormRow label="Avatar image">
        <FileInput
          id="avatar"
          accept="image/*"
          onChange={(e) => setAvatar(e.target.files[0])}
          disabled={isUpdating}
        />
      </FormRow>
      <FormRow>
        <Button variation="secondary" type="reset" disabled={isUpdating}>
          Cancel
        </Button>
        <Button disabled={isUpdating}>Update account</Button>
      </FormRow>
    </Form>
  );
}

export default UpdateUserDataForm;
