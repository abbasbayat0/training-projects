'use client';
import store from '@/lib/store/store';
import Link from 'next/link';

const page = () => {
  const { dark } = store();

  return (
    <div className={`h-screen w-full ${dark && 'bg-gray-800'} transition duration-500`}>
      <div className={`mx-auto flex max-w-7xl items-center justify-center`}>
        <form
          className={`mt-12 flex w-3/4 flex-col items-center justify-center px-5 py-10 shadow-xl hover:shadow-2xl min-[500px]:w-1/2 min-[900px]:w-1/3 xl:w-1/4`}
        >
          <p className={`text-3xl font-bold opacity-80 ${dark && 'text-white'}`}>Login</p>
          <div className={`mt-10 w-full`}>
            <label
              htmlFor='email'
              className={`text-[14px] font-thin opacity-90 ${dark && 'text-white'}`}
            >
              Email
            </label>
          </div>
          <input
            type='email'
            name='email'
            id='email'
            className={`mt-2 w-full rounded border px-2 py-1 opacity-40 outline-none focus:opacity-80 ${dark && 'border-white'}`}
          />
          <div className={`mt-3 w-full`}>
            <label
              htmlFor='password'
              className={`text-[14px] font-thin opacity-90 ${dark && 'text-white'}`}
            >
              Password
            </label>
          </div>
          <input
            type='password'
            name='password'
            id='password'
            className={`mt-2 w-full rounded border px-2 py-1 opacity-40 outline-none focus:opacity-80 ${dark && 'border-white'}`}
          />
          <button
            className={`mt-10 flex w-full items-center justify-center rounded bg-blue-600 px-4 py-2 text-white opacity-80 hover:shadow ${dark && 'bg-pink-700'}`}
          >
            LOGIN
          </button>
          <button
            className={`mt-3 flex w-full items-center justify-center rounded bg-blue-800 px-4 py-2 text-white opacity-80 hover:shadow ${dark&&"bg-blue-500"}`}
          >
            GUEST USER
          </button>
          <p className={`mt-5 text-sm opacity-80 ${dark && "text-white"}`}>
            Not a member yet ?{' '}
            <Link href='/register' className={`text-blue-400 ${dark && "text-pink-400"}`}>
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default page;
