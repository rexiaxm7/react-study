import axios from "axios";
import { useCallback, useState } from "react";
import { User } from "./../../types/api/User";

export const useAllUsers = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [users, setUsers] = useState<Array<User>>([]);

  const getUsers = useCallback(() => {
    setLoading(true);

    axios
      .get<Array<User>>("http://localhost:3001/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log("ユーザ取得に失敗しました");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { getUsers, loading, users };
};
