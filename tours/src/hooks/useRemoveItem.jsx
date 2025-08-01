import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const useRemoveItem = () => {
  const { mutate: removeItem } = useMutation({
    mutationFn: async (id) => {
      await axios.delete(`http://localhost:3000/tours/${id}`);
    },
  });
  return { removeItem };
};
export default useRemoveItem;
