import { useForm } from "react-hook-form";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Button from "../../ui/Button";

function SignupForm() {
  const { register, formState } = useForm();
  const { errors } = formState;
  return (
    <Form>
      <FormRow label="Full name">
        <Input
          text="text"
          id="fullName"
          {...register("fullName", { required: "This field is required" })}
        />
      </FormRow>
      <FormRow label="Email">
        <Input
          text="email"
          id="email"
          {...register("email", { required: "This field is required" })}
        />
      </FormRow>
      <FormRow label="Password  (min 8 characters)">
        <Input
          text="password"
          id="password"
          {...register("password", { required: "This field is required" })}
        />
      </FormRow>
      <FormRow label="Repeat password">
        <Input
          text="password"
          id="passwordConfirm"
          {...register("passwordConfirm", {
            required: "This field is required",
          })}
        />
      </FormRow>
      <FormRow>
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button>Create bew user</Button>
      </FormRow>
    </Form>
  );
}

export default SignupForm;
