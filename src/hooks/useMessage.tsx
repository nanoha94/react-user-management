import { useToast } from "@chakra-ui/react";
import React, { useCallback } from "react";

interface Props {
  title: string;
  status: "info" | "warning" | "success" | "error";
}

const useMessage = () => {
  const toast = useToast();
  const showMessage = useCallback(({ title, status }: Props) => {
    toast({
      title,
      status,
      position: "top",
      duration: 2000,
      isClosable: true,
    });
  }, []);
  return { showMessage };
};

export default useMessage;
