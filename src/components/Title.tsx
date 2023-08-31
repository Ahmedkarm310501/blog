import { Box, Heading } from "@chakra-ui/react";
import React from "react";

type Props = {};

const Title = (props: Props) => {
  return (
    <Box>
      <Heading
        as="h1"
        fontSize={{ base: "20vw", md: "19vw", lg: "17vw", xl: "18vw" }}
        textAlign={"center"}
        whiteSpace={"nowrap"}
        py={"2"}
        borderY={"1px"}
        mt={"6"}
      >
        THE BLOG
      </Heading>
    </Box>
  );
};

export default Title;
