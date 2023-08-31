import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const usePosts = () => {
  const postsQuery = useQuery({
    queryKey: ["posts"],
    queryFn: () =>
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.data),
  });
  return postsQuery;
};

export default usePosts;
