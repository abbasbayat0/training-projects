import { createContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = createContext();

const url = "https://api.unsplash.com/photos/?client_id=";
console.log(import.meta.env.VITE_KEY)

export const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState(true);
  const result = useQuery({
    queryKey: ["images"],
    queryFn: () => {
      axios.get(`${url}${import.meta.env.VITE_KEY}`);
    },
  });
  console.log(result);
  const toggleTheme = () => {
    setTheme(!theme);
  };
  return <AppContext value={{ theme, toggleTheme }}>{children}</AppContext>;
};
