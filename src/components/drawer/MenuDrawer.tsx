import React, { memo } from "react";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
} from "@chakra-ui/react";

interface Props {
  onClose: () => void;
  isOpen: boolean;
}

const MenuDrawer = memo((props: Props) => {
  return (
    <Drawer
      placement="left"
      size="xs"
      onClose={props.onClose}
      isOpen={props.isOpen}
    >
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody p={0} bg="gray.100">
            <Button w="100%">TOP</Button>
            <Button w="100%">ユーザー一覧</Button>
            <Button w="100%">設定</Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
});

export default MenuDrawer;
