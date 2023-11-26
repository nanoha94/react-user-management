import { memo, useState, useEffect, ChangeEvent } from "react";
import { useSelector } from "react-redux";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalOverlay,
  ModalBody,
  Stack,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
} from "@chakra-ui/react";
import { User } from "../../types/api/user";
import PrimaryButton from "../button/PrimaryButton";
import { userData } from "../../redux/store";

interface Props {
  user: User | null;
  isOpen: boolean;
  onClose: () => void;
}

const UserDetailModal = memo(({ user, isOpen, onClose }: Props) => {
  const userSelector = useSelector(userData);
  const isAdmin = userSelector.loginUser?.isAdmin;
  const [userName, setUserName] = useState<string>("");
  const [userFullName, setUserFullName] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");
  const [userTel, setUserTel] = useState<string>("");

  const onChangeUserName = (e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const onChangeUserFullName = (e: ChangeEvent<HTMLInputElement>) => {
    setUserFullName(e.target.value);
  };

  const onChangeUserEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setUserEmail(e.target.value);
  };

  const onChangeUserTel = (e: ChangeEvent<HTMLInputElement>) => {
    setUserTel(e.target.value);
  };

  const onClickUpdate = () => {
    onClose();
  };

  useEffect(() => {
    setUserName(user?.username ?? "");
    setUserFullName(user?.name ?? "");
    setUserEmail(user?.email ?? "");
    setUserTel(user?.phone ?? "");
  }, [user]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} autoFocus={false}>
      <ModalOverlay>
        <ModalContent pb={2}>
          <ModalHeader>ユーザー詳細</ModalHeader>
          <ModalCloseButton />
          <ModalBody mx={4}>
            <Stack spacing={4}>
              <FormControl>
                <FormLabel>名前</FormLabel>
                <Input
                  value={userName}
                  isReadOnly={!isAdmin}
                  onChange={onChangeUserName}
                />
              </FormControl>
              <FormControl>
                <FormLabel>フルネーム</FormLabel>
                <Input
                  value={userFullName}
                  isReadOnly={!isAdmin}
                  onChange={onChangeUserFullName}
                />
              </FormControl>
              <FormControl>
                <FormLabel>MAIL</FormLabel>
                <Input
                  value={userEmail}
                  isReadOnly={!isAdmin}
                  onChange={onChangeUserEmail}
                />
              </FormControl>
              <FormControl>
                <FormLabel>TEL</FormLabel>
                <Input
                  value={userTel}
                  isReadOnly={!isAdmin}
                  onChange={onChangeUserTel}
                />
              </FormControl>
            </Stack>
          </ModalBody>
          {isAdmin ? (
            <ModalFooter>
              <PrimaryButton onClick={onClickUpdate}>更新</PrimaryButton>
            </ModalFooter>
          ) : (
            <></>
          )}
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
});

export default UserDetailModal;
