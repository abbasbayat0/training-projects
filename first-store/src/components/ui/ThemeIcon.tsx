'use client';
import { FaMoon } from 'react-icons/fa6';
import { IoSunny } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { toggle } from '@/lib/features/theme/themeSlice';
import { RootState } from '@/lib/store/store';

const ThemeIcon = () => {
  const dark = useSelector((state: RootState) => state.theme.dark);
  const dispatch = useDispatch();
  return (
    <div>
      {dark ? (
        <IoSunny
          className={`${
            dark ? 'text-2xl text-white opacity-80' : 'text-2xl opacity-80'
          } cursor-pointer transition duration-500`}
          onClick={() => dispatch(toggle())}
        />
      ) : (
        <FaMoon className='cursor-pointer text-2xl opacity-80' onClick={() => dispatch(toggle())} />
      )}
    </div>
  );
};

export default ThemeIcon;
