'use client';
import store from '@/lib/store/store';
import Link from 'next/link';

const page = () => {
  const { dark } = store();

  return (
    <div className={`h-screen w-full ${dark && 'bg-gray-800'} transition duration-500`}>
      <div className={`mx-auto flex max-w-7xl items-center justify-center transition duration-500`}>
        <form
          className={`mt-12 flex w-3/4 flex-col items-center justify-center px-5 py-10 shadow-xl hover:shadow-2xl min-[500px]:w-1/2 min-[900px]:w-1/3 xl:w-[30%]`}
        >
          <p
            className={`text-3xl font-bold opacity-80 ${dark && 'text-white'} transition duration-500`}
          >
            Register
          </p>
          <div className={`mt-10 w-full`}>
            <label
              htmlFor='username'
              className={`text-[14px] font-thin opacity-90 ${dark && 'text-white'} transition duration-500`}
            >
              Username
            </label>
          </div>
          <input
            type='text'
            name='username'
            id='username'
            className={`mt-2 w-full rounded-md border p-2 opacity-40 outline-none focus:opacity-80 ${dark && 'border-white text-white'} transition duration-500`}
          />
          <div className={`mt-3 w-full`}>
            <label
              htmlFor='email'
              className={`text-[14px] font-thin opacity-90 ${dark && 'text-white'} transition duration-500`}
            >
              Email
            </label>
          </div>
          <input
            type='email'
            name='email'
            id='email'
            className={`mt-2 w-full rounded-md border p-2 opacity-40 outline-none focus:opacity-80 ${dark && 'border-white text-white'} transition duration-500`}
          />
          <div className={`mt-3 w-full`}>
            <label
              htmlFor='password'
              className={`text-[14px] font-thin opacity-90 ${dark && 'text-white'} transition duration-500`}
            >
              Password
            </label>
          </div>
          <input
            type='password'
            name='password'
            id='password'
            className={`mt-2 w-full rounded-md border p-2 opacity-40 outline-none focus:opacity-80 ${dark && 'border-white text-white'} transition duration-500`}
          />
          <button
            className={`mt-10 flex w-full cursor-pointer items-center justify-center rounded-md bg-blue-600 px-4 py-3 text-white opacity-80 select-none hover:shadow ${dark && 'bg-pink-700'} transition duration-500`}
          >
            REGISTER
          </button>

          <p className={`mt-5 text-sm opacity-80 select-none ${dark && 'text-white'}`}>
            Already a member ?{' '}
            <Link
              href='/login'
              className={`text-blue-400 ${dark && 'text-pink-400'} cursor-pointer transition duration-500 select-none`}
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default page;
