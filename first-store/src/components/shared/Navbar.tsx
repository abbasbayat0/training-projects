'use client';
import { MdOutlineShoppingCart } from 'react-icons/md';
import ThemeIcon from '../ui/ThemeIcon';
import store from '@/lib/store/store';
// import NavMenu from "../ui/NavMenu";
// import NavLinks from "../ui/NavLinks";

const Navbar = () => {
  const { dark } = store();
  return (
    <section className="mx-auto flex max-w-7xl justify-between px-3 py-2">
      <div
        className={`${
          dark ? 'bg-pink-700' : 'bg-blue-600'
        } hidden h-10 min-w-10 cursor-pointer items-center justify-center rounded-xl text-2xl font-bold text-white opacity-90 select-none sm:flex`}>
        C
      </div>
      <div className="flex items-center">
        {/* <NavMenu />
        <NavLinks /> */}
      </div>
      <div className="flex items-center justify-end gap-2">
        <ThemeIcon />
        <div className="relative">
          <MdOutlineShoppingCart
            className={`${
              dark ? 'text-white' : ''
            } cursor-pointer text-2xl opacity-80`}
          />
          <div
            className={`absolute -top-2 -right-1 rounded-xl px-1 text-xs text-white select-none ${
              dark ? 'bg-pink-700' : 'bg-blue-600'
            }`}>
            0
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
