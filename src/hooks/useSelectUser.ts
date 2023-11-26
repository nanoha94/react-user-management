import { useCallback, useState } from "react";
import { User } from "../types/api/user";

interface Props {
  id: number;
  users: Array<User | null>;
  onOpen: () => void;
}

const useSelectUser = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>();

  const onSelectUser = useCallback(({ id, users, onOpen }: Props) => {
    const targetUser = users.find((user) => user?.id === id);
    setSelectedUser(targetUser);
    onOpen();
  }, []);
  return { onSelectUser, selectedUser };
};

export default useSelectUser;
