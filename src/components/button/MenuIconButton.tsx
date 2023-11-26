import { memo } from "react";
import { IconButton } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

interface Props {
  onOpen: () => void;
}

const MenuIconButton = memo((props: Props) => {
  return (
    <IconButton
      aria-label="メニューボタン"
      icon={<HamburgerIcon />}
      size="sm"
      variant="unstyled"
      display={{ base: "block", md: "none" }}
      onClick={props.onOpen}
    />
  );
});

export default MenuIconButton;
