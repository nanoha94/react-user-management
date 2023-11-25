import React, { memo } from "react";
import { Box, Stack, Image, Text } from "@chakra-ui/react";

interface Props {
  imageUrl: string;
  userName: string;
  fullName: string;
  onClick: () => void;
}

const UserCard = memo(({ imageUrl, userName, fullName, onClick }: Props) => {
  return (
    <Box
      w="260px"
      h="260px"
      bg="white"
      borderRadius="10px"
      shadow="md"
      p={4}
      _hover={{ cursor: "pointer", opacity: 0.8 }}
      onClick={onClick}
    >
      <Stack textAlign="center">
        <Image
          borderRadius="full"
          boxSize="160px"
          src={imageUrl}
          alt="プロフィール画像"
          m="auto"
        />
        <Text fontSize="lg" fontWeight="bold">
          {userName}
        </Text>
        <Text fontSize="sm" color="gray">
          {fullName}
        </Text>
      </Stack>
    </Box>
  );
});

export default UserCard;
