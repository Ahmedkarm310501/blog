import React from "react";
import { useRouter } from "next/router";
import {
  Box,
  Flex,
  Text,
  SimpleGrid,
  GridItem,
  Image,
  Heading,
  useColorModeValue,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";
import PostCard from "@/components/PostCard";
import usePost from "@/hooks/usePost";
import useComments from "@/hooks/useComments";

type Props = {};

const BlogDetails = (props: Props) => {
  const supportText = useColorModeValue("#667085", "#C0C5D0");

  const router = useRouter();
  const { id } = router.query;
  const {
    data: post,
    isLoading: postLoading,
    isError: postError,
  } = usePost(parseInt(id as string));
  const {
    data: comments,
    isLoading: commentsLoading,
    isError: commentsError,
  } = useComments(parseInt(id as string));

  return (
    <Box my={6}>
      <SimpleGrid
        columns={{ base: 1, lg: 3 }}
        spacing={10}
        row={{ base: 1, lg: 2 }}
      >
        {!postError && (
          <GridItem colSpan={{ base: 3, lg: 3 }} order={{ base: 1, lg: 2 }}>
            <Flex direction={"column"}>
              {postLoading ? (
                <Skeleton height={24} />
              ) : (
                <Heading size="md" mb={6} fontWeight={600} color={"#6941C6"}>
                  Sunday , 1 Jan 2023
                </Heading>
              )}

              {postLoading ? (
                <Skeleton height={96} />
              ) : (
                <Image
                  objectFit="cover"
                  src="/images/post1.jpeg"
                  maxH={96}
                  alt=""
                />
              )}
              {postLoading ? (
                <SkeletonText mt="4" noOfLines={4} spacing="4" />
              ) : (
                <Text fontSize={"24px"} fontWeight={600} mb={3}>
                  {post?.title}
                </Text>
              )}
              {postLoading ? (
                <SkeletonText mt="4" noOfLines={4} spacing="4" />
              ) : (
                <Text fontSize={"16px"} mb={"32px"} color={supportText}>
                  {post?.body}
                </Text>
              )}
            </Flex>
            <Flex direction={"column"}>
              <Heading size="md" fontWeight={600} color={"#6941C6"} mb={3}>
                Comments
              </Heading>
              {comments?.map((comment: any) => (
                <Flex direction={"column"} mb={"8px"} key={comment?.id}>
                  <Text fontSize={"16px"} fontWeight={600} mb={3}>
                    {comment?.name}
                  </Text>
                  <Text fontSize={"16px"} mb={"32px"} color={supportText}>
                    {comment?.body}
                  </Text>
                </Flex>
              ))}
              {commentsLoading && (
                <Flex direction={"column"} mb={"32px"}>
                  <Skeleton height={"24px"} mb={2} />
                  <Skeleton height={"24px"} mb={2} />
                  <Skeleton height={"24px"} mb={2} />
                  <Skeleton height={"24px"} mb={2} />
                  <Skeleton height={"24px"} mb={2} />
                </Flex>
              )}
            </Flex>
          </GridItem>
        )}
        {postError && (
          <GridItem colSpan={{ base: 3, lg: 3 }} order={{ base: 1, lg: 2 }}>
            <Text fontSize={"24px"} fontWeight={600} mb={3}>
              Post not found
            </Text>
          </GridItem>
        )}
      </SimpleGrid>
    </Box>
  );
};

export default BlogDetails;
