import Form from "../../ui/Form"
import Input from "../../ui/Input";
import Button from "../../ui/Button"
import Textarea from "../../ui/Textarea";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCabin } from "../../services/apiCabins";
import { toast } from "react-hot-toast";
import FormRow from "../../ui/FormRow";

function CreateCabinForm() {
  const { register, handleSubmit, reset } = useForm();

  const queryClient = useQueryClient()
  const { isLoading: isCreating, mutate } = useMutation({
    mutationFn: createCabin,
    onSuccess: () => {
      toast.success("New cabin successfully created!");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
      // reset all input field
      reset()
    },
    onError: (err) => toast.error(err.message),
  });

  function onSubmit(data) {
    mutate(data)
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Cabin name">
        <Input type="text" id="name" {...register("name")} />
      </FormRow>
      <FormRow label="Maximum capacity">
        <Input type="number" id="maxCapacity" {...register("maxCapacity")} />
      </FormRow>
      <FormRow label="Regular price">
        <Input type="number" id="regularPrice" {...register("regularPrice")} />
      </FormRow>
      <FormRow label="Discount">
        <Input
          type="number"
          id="discount"
          defaultValue={0}
          {...register("discount")}
        />
      </FormRow>
      <FormRow label="Description for website">
        <Textarea
          id="description"
          defaultValue=""
          {...register("description")}
        />
      </FormRow>
      <FormRow label="Cabin photo">
        <Input id="image" accept="image/*" />
      </FormRow>
      <FormRow>
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isCreating}>Edit cabin</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm
