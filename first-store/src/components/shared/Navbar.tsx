"use client";
import { MdOutlineShoppingCart } from "react-icons/md";
import ThemeIcon from "../ui/ThemeIcon";
import store from "@/lib/store/store";
// import NavMenu from "../ui/NavMenu";
// import NavLinks from "../ui/NavLinks";

const Navbar = () => {
  const { dark } = store();
  return (
    <section className="max-w-7xl mx-auto flex justify-between py-2 px-3">
      <div
        className={`${
          dark ? "bg-pink-700" : "bg-blue-600"
        } min-w-10 h-10 sm:flex justify-center items-center rounded-xl text-2xl font-bold text-white opacity-90 select-none cursor-pointer hidden`}
      >
        C
      </div>
      <div className="flex items-center">
        {/* <NavMenu />
        <NavLinks /> */}
      </div>
      <div className="flex justify-end items-center gap-2">
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
  );
};

export default Navbar;
