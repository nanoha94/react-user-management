import React from "react";
import { Button } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";

function App() {
  return (
    <div>
      <RouterProvider router={router} />
      <Button colorScheme="teal">ボタン</Button>
    </div>
  );
}

export default App;
