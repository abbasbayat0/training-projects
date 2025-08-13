"use client";

import { FaMoon } from "react-icons/fa6";
import { IoSunny } from "react-icons/io5";
import store from "@/lib/store/store";

const ThemeIcon = () => {
  const { dark, setTheme } = store();
  return (
    <div>
      {dark ? (
        <IoSunny
          className={`${
            dark ? "text-2xl opacity-80 text-white" : "text-2xl opacity-80"
          } cursor-pointer`}
          onClick={() => setTheme()}
        />
      ) : (
        <FaMoon
          className="text-2xl opacity-80 cursor-pointer"
          onClick={() => setTheme()}
        />
      )}
    </div>
  );
};

export default ThemeIcon;
