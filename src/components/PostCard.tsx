import React from "react";
import {
  Card,
  Stack,
  CardBody,
  Heading,
  Text,
  CardFooter,
  Button,
  Image,
  Flex,
  Badge,
  useColorModeValue,
  Box,
  Icon,
} from "@chakra-ui/react";
import Post from "@/schemas/post";
import Link from "next/link";

type Props = {
  direction?: "row" | "column";
  fullHeight?: boolean;
  post: Post;
};

const PostCard = ({
  direction = "column",
  fullHeight,
  post: { title, body, id, userId },
}: Props) => {
  const postTitle = useColorModeValue("#1A1A1A", "#FFF");
  const supportText = useColorModeValue("#667085", "#C0C5D0");
  return (
    <Link href={`/posts/${id}`}>
      <Flex
        direction={{
          base: "column",
          md: direction === "row" ? "row" : "column",
        }}
        gap={6}
        h={fullHeight ? "100%" : "auto"}
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", md: direction === "row" ? "50%" : "100%" }}
          minH={200}
          height={direction === "row" ? "100%" : "50%"}
          src="/images/full-width.jpeg"
          alt="Caffe Latte"
        />

        <Stack gap={2} mb={3} flex={1}>
          <Flex
            height={"100%"}
            direction={"column"}
            justifyContent={"space-between"}
          >
            <Heading size="xs" fontWeight={600} color={"#6941C6"}>
              Sunday , 1 Jan 2023
            </Heading>
            <Flex direction={"row"} justifyContent={"space-between"}>
              <Text color={postTitle} fontWeight={600} fontSize={"2xl"}>
                {title}
              </Text>

              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                // fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  stroke={postTitle}
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Flex>
            <Text color={supportText} fontWeight={400}>
              {body}
            </Text>
            <Flex direction={"row"} justifyContent={"space-between"} mt={2}>
              <Flex direction={"row"}>
                <Badge borderRadius="full" px="2" colorScheme="facebook">
                  Design
                </Badge>
                <Badge borderRadius="full" px="2" colorScheme="teal" ml="2">
                  Research
                </Badge>
                <Badge borderRadius="full" px="2" colorScheme="telegram" ml="2">
                  Presentation
                </Badge>
              </Flex>
            </Flex>
          </Flex>
        </Stack>
      </Flex>
    </Link>
  );
};

export default PostCard;
