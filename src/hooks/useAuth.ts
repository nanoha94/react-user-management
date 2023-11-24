import { useCallbackRef } from "@chakra-ui/react";
import axios from "axios";
import React, { useCallback, useState } from "react";
import { User } from "../types/api/user";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const login = useCallback((id: string) => {
    console.log(id);

    setLoading(true);
    axios
      .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        if (res.data.id === id) {
          navigate("/home");
        } else {
          alert("ユーザーが見つかりません");
        }
      })
      .catch(() => {
        alert("ログインできません");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { login, loading };
};

export default useAuth;
