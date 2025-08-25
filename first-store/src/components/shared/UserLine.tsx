'use client';
import { RootState } from '@/lib/store/store';
import Link from 'next/link';
import { useSelector } from 'react-redux';

const UserLine = () => {
  const dark = useSelector((state: RootState) => state.theme.dark);
  return (
    <article className={`${dark ? 'bg-gray-900' : 'bg-gray-200'} transition duration-500`}>
      <section
        className={`${dark ? 'bg-gray-600' : 'bg-gray-800'} mx-auto flex justify-center gap-5 py-2 transition duration-500`}
      >
        <Link
          href='/login'
          className='cursor-pointer text-xs font-thin text-white opacity-80 select-none hover:underline sm:text-[14px]'
        >
          Sign In / Guest
        </Link>
        <Link
          href='/register'
          className='cursor-pointer text-xs font-thin text-white opacity-80 select-none hover:underline sm:text-[14px]'
        >
          Create Account
        </Link>
      </section>
    </article>
  );
};

export default UserLine;
