import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const useComments = (postId: number) => {
  const postsQuery = useQuery({
    queryKey: ["posts", postId, "comments"],
    queryFn: () =>
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then((res) => res.data),
  });
  return postsQuery;
};

export default useComments;
