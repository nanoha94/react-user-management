import { Button } from "@chakra-ui/react";
import React, { ReactNode, memo } from "react";

interface Props {
  children: ReactNode;
  disabled?: boolean;
  loading?: boolean;
  onClick: () => void;
}

const PrimaryButton = memo(
  ({ children, disabled = false, loading = false, onClick }: Props) => {
    return (
      <Button
        bg="teal.400"
        color="white"
        _hover={{ opacity: 0.8 }}
        isDisabled={disabled || loading}
        isLoading={loading}
        onClick={onClick}
      >
        {children}
      </Button>
    );
  }
);

export default PrimaryButton;
