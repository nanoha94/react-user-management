import React, { useEffect, memo, useCallback } from "react";
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
  onClickHome: () => void;
  onClickUserManagement: () => void;
  onClickSetting: () => void;
}

const MenuDrawer = memo((props: Props) => {
  const onClickButton = useCallback((action: () => void) => {
    props.onClose();
    action();
  }, []);

  useEffect(() => {
    console.log("render MenuDrawer");
  }, []);

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
            <Button w="100%" onClick={() => onClickButton(props.onClickHome)}>
              TOP
            </Button>
            <Button
              w="100%"
              onClick={() => onClickButton(props.onClickUserManagement)}
            >
              ユーザー一覧
            </Button>
            <Button
              w="100%"
              onClick={() => onClickButton(props.onClickSetting)}
            >
              設定
            </Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
});

export default MenuDrawer;
