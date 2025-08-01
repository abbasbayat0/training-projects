import { useContext } from "react";
import { AppContext } from "../context/context";

const useGlobalContext = () => {
  return useContext(AppContext);
};

export default useGlobalContext;
