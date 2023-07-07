import { useMutation } from "@tanstack/react-query";
import { logout as logoutApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

export function useLogout() {
  const navigate = useNavigate();

  const { isLoading, mutate: logout } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      // 導航至login頁面後不保留所有頁面紀錄
      navigate("login", { replace: true });
    },
  });
  return { isLoading, logout };
}
