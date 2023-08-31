import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const Fotter = () => {
  return (
    <Box py={"32px"} px={{ base: 4, md: 6, lg: 20 }}>
      <Flex
        gap={2}
        direction={{
          base: "column",
          md: "row",
        }}
        // justifyItems={"center"}
        alignItems={"center"}
      >
        <Text>© 2023</Text>
        <Text>Twitter</Text>
        <Text>LinkedIn</Text>
        <Text>Email</Text>
        <Text>RSS feed</Text>
        <Text>Add to Feedly</Text>
      </Flex>
    </Box>
  );
};

export default Fotter;
