'use client';

import { FaMoon } from 'react-icons/fa6';
import { IoSunny } from 'react-icons/io5';
import store from '@/lib/store/store';

const ThemeIcon = () => {
  const { dark, setTheme } = store();
  return (
    <div>
      {dark ? (
        <IoSunny
          className={`${
            dark ? 'text-2xl text-white opacity-80' : 'text-2xl opacity-80'
          } cursor-pointer transition duration-500`}
          onClick={() => setTheme()}
        />
      ) : (
        <FaMoon className='cursor-pointer text-2xl opacity-80' onClick={() => setTheme()} />
      )}
    </div>
  );
};

export default ThemeIcon;
