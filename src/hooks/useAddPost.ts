import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useToast } from "@chakra-ui/react";

import axios from "axios";
import Post from "@/schemas/post";

type PostMutation = {
  title: string;
  author: string;
  content: string;
};

const useAddPost = () => {
  const router = useRouter();
  const toast = useToast();
  const addPostMutation = useMutation({
    mutationFn: (newPost: PostMutation) =>
      axios
        .post("https://jsonplaceholder.typicode.com/posts", newPost)
        .then((res) => res.data),
    onSuccess: () => {
      // Invalidate and refetch
      router.push("/");
      toast({
        title: "Post added successfully",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    },
    onError: () => {
      toast({
        title: "An error occurred.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    },
  });

  return addPostMutation;
};

export default useAddPost;
