import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const usePost = (postId: number) => {
  const postsQuery = useQuery({
    queryKey: ["posts", postId],
    queryFn: () =>
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then((res) => res.data),
  });
  return postsQuery;
};

export default usePost;
