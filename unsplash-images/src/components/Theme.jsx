import { FaMoon } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";
import useGlobalContext from "../hooks/useGlobalContext";

const Theme = () => {
  const { theme, toggleTheme } = useGlobalContext();
  return (
    <>
      <FaMoon
        onClick={toggleTheme}
        className={`${
          theme ? "opacity-0" : "opacity-100 text-2xl"
        } fixed top-4 right-4 transition-all duration-500 cursor-pointer select-none`}
      />
      <IoSunny
        onClick={toggleTheme}
        className={`${
          theme ? "opacity-100 text-white text-2xl" : "opacity-0"
        } fixed top-4 right-4 transition-all duration-500 cursor-pointer select-none`}
      />
    </>
  );
};

export default Theme;
