'use client';
import { IoGridOutline } from 'react-icons/io5';
import { GiHamburgerMenu } from 'react-icons/gi';
import type { ShowIconMode } from '@/lib/types/types';
import store from '@/lib/store/store';

const ShowIcons = ({ showMode, setShowMode }: ShowIconMode) => {
  const { dark } = store();
  const bg = dark ? 'bg-pink-600 text-black' : 'bg-blue-600 text-white';
  return (
    <div className={`flex gap-2`}>
      <p
        onClick={() => {
          setShowMode(true);
        }}
        className={`cursor-pointer rounded-xl p-2 select-none ${showMode && bg} ${dark && !showMode && 'text-white'}`}
      >
        <IoGridOutline className={`text-xl`} />
      </p>
      <p
        onClick={() => {
          setShowMode(false);
        }}
        className={`cursor-pointer rounded-xl p-2 select-none ${!showMode && bg} ${dark && showMode && 'text-white'}`}
      >
        <GiHamburgerMenu className={`text-xl`} />
      </p>
    </div>
  );
};

export default ShowIcons;
