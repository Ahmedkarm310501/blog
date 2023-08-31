import React from "react";
import {
  Box,
  Heading,
  SimpleGrid,
  GridItem,
  useBreakpointValue,
} from "@chakra-ui/react";
import PostCard from "@/components/PostCard";
import Post from "@/schemas/post";
type Props = {
  posts: Post[];
};

const RecentPosts = ({ posts }: Props) => {
  const breakpoint = useBreakpointValue({
    base: "base",
    sm: "sm",
    md: "md",
    lg: "lg",
    xl: "xl",
  });
  return (
    <Box my={"6"}>
      <Heading fontSize={"24px"} fontWeight={600} mb={"32px"}>
        Recent blog posts
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <GridItem colSpan={{ base: 1, md: 2, lg: 1 }}>
          <PostCard fullHeight={true} post={posts[0]} />
        </GridItem>
        <GridItem colSpan={{ base: 1, md: 2, lg: 1 }}>
          <SimpleGrid columns={{ base: 1, md: 1, lg: 1 }} spacing={10}>
            <PostCard direction="row" post={posts[1]} />
            <PostCard direction="row" post={posts[2]} />
          </SimpleGrid>
        </GridItem>
      </SimpleGrid>
      <Box my={"32px"} />
      <PostCard
        direction={breakpoint === "md" ? "column" : "row"}
        post={posts[3]}
      />
    </Box>
  );
};

export default RecentPosts;
