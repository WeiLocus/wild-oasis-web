import { useForm } from "react-hook-form";
import { useUpdateUser } from "./useUpdateUser";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Button from "../../ui/Button";

function UpdatePasswordForm() {
  const { register, formState, getValues, handleSubmit } = useForm();
  const { errors } = formState;

  const { isUpdating, updateUser } = useUpdateUser();

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="New password (min 8 chars)">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password needs a minimum 8 characters",
            },
          })}
        />
      </FormRow>
      <FormRow label="Confirm password">
        <Input
          type="password"
          id="passwordConfirm"
          autoComplete="new-password"
          {...register("passwordConfirm", {
            required: "This field is required",
            validate: (value) =>
              value === getValues().password || "Password need to match",
          })}
        />
      </FormRow>
      <FormRow>
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button>Update password</Button>
      </FormRow>
    </Form>
  );
}

export default UpdatePasswordForm;
