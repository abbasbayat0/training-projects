import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useFetch = () => {
  const { data: tours, isLoading } = useQuery({
    queryKey: ["tours"],
    queryFn: async () => {
      const { data } = await axios.get("http://localhost:3000/tours");
      return data;
    },
  });

  return { tours, isLoading };
};
export default useFetch;
