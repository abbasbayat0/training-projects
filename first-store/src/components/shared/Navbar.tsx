'use client';
import { MdOutlineShoppingCart } from 'react-icons/md';
import ThemeIcon from '../ui/ThemeIcon';
import NavMenu from '../ui/NavMenu';
import NavLinks from '../ui/NavLinks';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store/store';

const Navbar = () => {
  const dark = useSelector((state: RootState) => state.theme.dark);
  return (
    <article className={`${dark ? 'bg-gray-900' : 'bg-gray-200'} transition duration-500`}>
      <section className='mx-auto flex max-w-7xl justify-between px-3 py-2'>
        <Link
          href='/'
          className={`${
            dark ? 'bg-pink-600' : 'bg-blue-600'
          } hidden h-10 min-w-10 cursor-pointer items-center justify-center rounded-xl text-2xl font-bold text-white opacity-90 transition duration-500 select-none sm:flex`}
        >
          C
        </Link>
        <div className='flex items-center'>
          <NavMenu />
          <NavLinks />
        </div>
        <div className='flex items-center justify-end gap-2'>
          <ThemeIcon />
          <div className='relative'>
            <MdOutlineShoppingCart
              className={`${dark && 'text-white'} cursor-pointer text-2xl opacity-80 transition duration-500`}
            />
            <div
              className={`absolute -top-2 -right-1 rounded-xl px-1 text-xs text-white select-none ${
                dark ? 'bg-pink-700' : 'bg-blue-600'
              } transition duration-500`}
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
