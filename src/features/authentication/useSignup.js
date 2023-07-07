import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import { toast } from "react-hot-toast";

export function useSignup() {
  const { isLoading, mutate: signup } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      console.log(user)
      toast.success("Account Successfully created! Please verify the new account from the user's email address.")
    }
  })
  return { isLoading, signup}
}