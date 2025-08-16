"use client";
import { MdOutlineShoppingCart } from "react-icons/md";
import ThemeIcon from "../ui/ThemeIcon";
import store from "@/lib/store/store";
import NavMenu from "../ui/NavMenu";
import NavLinks from "../ui/NavLinks";

const Navbar = () => {
  const { dark } = store();
  return (
    <article
      className={`${dark ? "bg-gray-900 p-1" : "bg-gray-200 p-1"} w-full`}
    >
      <section className="max-w-6xl mx-auto flex justify-between px-2 py-1 sm:px-10">
        <div className="flex items-center w-5/6">
          <NavMenu />
          <NavLinks />
        </div>
        <div className="flex justify-end items-center gap-2 w-1/6">
          <ThemeIcon />
          <div className="relative">
            <MdOutlineShoppingCart
              className={`${
                dark ? "text-white" : ""
              } text-2xl opacity-80 cursor-pointer`}
            />
            <div
              className={`text-xs absolute px-1 select-none rounded-xl text-white -top-2 -right-1 ${
                dark ? "bg-pink-700" : " bg-blue-600"
              }`}
            >
              0
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default Navbar;
