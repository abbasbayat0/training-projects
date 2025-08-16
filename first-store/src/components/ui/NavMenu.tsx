"use client";
import listOfNavLinks from "@/assets/listOfNavLinks";
import store from "@/lib/store/store";
import { useState } from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";

const NavMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { dark } = store();
  return (
    <div className="relative sm:hidden">
      <HiOutlineMenuAlt1
        className={`text-3xl ${dark && "text-white"}`}
        onClick={() => setShowMenu(!showMenu)}
      />
      <div
        className={`absolute bg-gray-300 flex flex-col gap-1 min-w-44 py-4 rounded-xl top-12 ${
          dark && "bg-gray-900"
        } ${!showMenu && "hidden"}`}
      >
        {listOfNavLinks.map((link) => {
          const isActive = window.location.pathname === link.link;
          return (
            <div
              key={link.link}
              className={`flex justify-center items-center gap-2 py-1 w-3/4 mx-auto rounded-xl ${
                isActive && "bg-gray-700"
              }`}
            >
              <p
                className={`${isActive && "text-white"} text-xl ${
                  dark && "text-white"
                }`}
              >
                {link.icon}
              </p>
              <p
                className={`w-1/2 ${isActive && "text-white"} ${
                  dark && "text-white"
                }`}
              >
                {link.title}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NavMenu;
