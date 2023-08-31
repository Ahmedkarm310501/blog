import React from "react";
import {
  Box,
  Heading,
  SimpleGrid,
  Divider,
  Flex,
  useColorMode,
} from "@chakra-ui/react";
import PostCard from "./PostCard";
import { ArrowForwardIcon, ArrowBackIcon } from "@chakra-ui/icons";
import Post from "@/schemas/post";
type Props = {
  posts: Post[];
};

const AllPosts = ({ posts }: Props) => {
  const { colorMode } = useColorMode();
  return (
    <Box>
      <Heading fontSize={"24px"} fontWeight={600} mb={"32px"}>
        All blog posts
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </SimpleGrid>
      <Divider my={"32px"} />
      {/* pagination ui */}
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          cursor={"pointer"}
        >
          <ArrowBackIcon boxSize={6} mr={"8px"} />
          Previous
        </Flex>
        <Flex gap={2}>
          <Box
            p={"12px"}
            borderRadius={"8px"}
            _hover={{
              bg: "#f9f5ff",
              color: colorMode === "dark" ? "#121" : "",
            }}
            cursor={"pointer"}
          >
            1
          </Box>
          <Box
            p={"12px"}
            borderRadius={"8px"}
            _hover={{
              bg: "#f9f5ff",
              color: colorMode === "dark" ? "#121" : "",
            }}
            cursor={"pointer"}
          >
            2
          </Box>
          <Box
            p={"12px"}
            borderRadius={"8px"}
            _hover={{
              bg: "#f9f5ff",
              color: colorMode === "dark" ? "#121" : "",
            }}
            cursor={"pointer"}
          >
            3
          </Box>
          <Box
            p={"12px"}
            borderRadius={"8px"}
            _hover={{
              bg: "#f9f5ff",
              color: colorMode === "dark" ? "#121" : "",
            }}
            cursor={"pointer"}
          >
            4
          </Box>
          <Box
            p={"12px"}
            borderRadius={"8px"}
            _hover={{
              bg: "#f9f5ff",
              color: colorMode === "dark" ? "#121" : "",
            }}
            cursor={"pointer"}
          >
            5
          </Box>
        </Flex>
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          cursor={"pointer"}
        >
          Next
          <ArrowForwardIcon boxSize={6} ml={"8px"} />
        </Flex>
      </Flex>
    </Box>
  );
};

export default AllPosts;
