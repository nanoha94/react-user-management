import React, { useCallback, useState } from "react";
import { User } from "../types/api/user";

interface Props {
  id: number;
  users: Array<User>;
  onOpen: () => void;
}

const useSelectUser = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>();

  const onSelectUser = useCallback(({ id, users, onOpen }: Props) => {
    const targetUser = users.find((user) => user.id === id);
    setSelectedUser(targetUser ?? null);
    onOpen();
  }, []);
  return { onSelectUser, selectedUser };
};

export default useSelectUser;
