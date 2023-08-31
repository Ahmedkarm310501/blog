import React from "react";
import NavBar from "./NavBar";
import Fotter from "./Fotter";
import { Box } from "@chakra-ui/react";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <NavBar />
      <Box as="main" px={{ base: 4, md: 6, lg: 20 }}>
        {children}
      </Box>
      <Fotter />
    </>
  );
};

export default Layout;
