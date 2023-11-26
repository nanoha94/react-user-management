import React, { memo, useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  Center,
  Spinner,
  Wrap,
  WrapItem,
  useDisclosure,
} from "@chakra-ui/react";
import UserCard from "../components/card/UserCard";
import useAllUsers from "../hooks/useAllUsers";
import UserDetailModal from "../components/modal/UserDetailModal";
import useSelectUser from "../hooks/useSelectUser";
import { userData } from "../redux/store";

const UserManagement = memo(() => {
  const userSelector = useSelector(userData);
  const { onSelectUser, selectedUser } = useSelectUser();
  const { getUsers, users, loading } = useAllUsers();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onClickUser = useCallback(
    (id: number) => {
      onSelectUser({ id, users, onOpen });
    },
    [users]
  );

  useEffect(() => {
    getUsers();
    console.log(userSelector.loginUser);
  }, []);

  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }}>
          {users.map((user) => (
            <WrapItem key={user.id} mx="auto">
              <UserCard
                id={user.id}
                imageUrl={"https://source.unsplash.com/random"}
                userName={user.username}
                fullName={user.name}
                onClick={onClickUser}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <UserDetailModal
        user={selectedUser ?? null}
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
});

export default UserManagement;
