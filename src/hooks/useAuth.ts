import { useCallback, useState } from "react";
import axios from "axios";
import { User } from "../types/api/user";
import { useNavigate } from "react-router-dom";
import useMessage from "./useMessage";
import { store } from "../redux/store";
import { setLoginUser } from "../redux/user";

const useAuth = () => {
  const navigate = useNavigate();
  const { showMessage } = useMessage();
  const [loading, setLoading] = useState(false);

  const login = useCallback((id: string) => {
    setLoading(true);
    axios
      .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        if (res.data.id == Number(id)) {
          const isAdmin = res.data.id === 10 ? true : false;
          store.dispatch(setLoginUser({ ...res.data, isAdmin }));
          showMessage({ title: "ログインしました", status: "success" });
          navigate("/home");
        } else {
          showMessage({ title: "ユーザーが見つかりません", status: "error" });
        }
      })
      .catch(() => {
        showMessage({ title: "ログインできません", status: "error" });
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { login, loading };
};

export default useAuth;
