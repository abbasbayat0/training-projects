'use client';
import listOfNavLinks from '@/assets/listOfNavLinks';
import { setActivePage } from '@/lib/features/activePageSlice';
import { RootState } from '@/lib/store/store';
import Link from 'next/link';
import { useState } from 'react';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';

const NavMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const activePage = useSelector((state: RootState) => state.activePage.activePage);
  const dispatch = useDispatch();
  const dark = useSelector((state: RootState) => state.theme.dark);

  return (
    <div className='relative sm:hidden'>
      <HiOutlineMenuAlt1
        className={`text-3xl ${dark && 'text-white'}`}
        onClick={() => setShowMenu(!showMenu)}
      />
      <div
        className={`absolute top-12 flex min-w-44 flex-col gap-1 rounded-xl bg-gray-300 py-4 ${
          dark && 'bg-gray-900'
        } ${!showMenu && 'hidden'} z-10 transition duration-500`}
      >
        {listOfNavLinks.map((link) => {
          const isActive = activePage === link.link;
          return (
            <Link
              onClick={() => {
                dispatch(setActivePage(link.link));
                setShowMenu(false);
              }}
              href={link.link}
              key={link.link}
              className={`mx-auto flex w-3/4 items-center justify-center gap-2 rounded-xl py-1 ${
                isActive && 'bg-gray-700'
              } transition duration-500`}
            >
              <p
                className={`${isActive && 'text-white'} text-xl ${dark && 'text-white'} transition duration-500`}
              >
                {link.icon}
              </p>
              <p
                className={`w-1/2 ${isActive && 'text-white'} ${dark && 'text-white'} transition duration-500`}
              >
                {link.title}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default NavMenu;
