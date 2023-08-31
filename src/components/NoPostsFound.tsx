import React from "react";
import { Box } from "@chakra-ui/react";

type Props = {};

const NoPostsFound = (props: Props) => {
  return (
    <Box my={"32px"} textAlign={"center"} fontSize={36}>
      No posts found
    </Box>
  );
};

export default NoPostsFound;
