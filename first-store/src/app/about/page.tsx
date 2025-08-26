'use client';
import { RootState } from '@/lib/store/store';
import { useSelector } from 'react-redux';

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dark = useSelector((state: RootState) => state.theme.dark);
  return (
    <div className={`h-screen w-full ${dark && 'bg-gray-600'} transition duration-500`}>
      <div className={`mx-auto flex max-w-7xl flex-col items-center justify-center`}>
        <div className='mt-20 flex flex-col items-center justify-center sm:flex-row sm:gap-2'>
          <p
            className={`text-4xl font-bold opacity-80 ${dark && 'text-white'} transition duration-500 md:text-5xl`}
          >
            We Love
          </p>
          <p
            className={`mt-2 rounded-xl p-5 px-6 text-3xl font-bold tracking-widest opacity-80 ${dark ? 'bg-pink-600 text-black' : 'bg-blue-600 text-white'} transition duration-500 md:text-4xl`}
          >
            Comfy
          </p>
        </div>
        <div className={`px-10 py-5`}>
          <p className={`opacity-80 ${dark && 'text-white'} transition duration-500 md:text-lg`}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, ab, quo laborum nobis
            voluptate impedit quibusdam ut omnis iusto voluptates corrupti, soluta consectetur!
            Suscipit error numquam reiciendis corporis soluta eligendi? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Voluptatem ducimus dolorem repellendus nulla cum optio ex
            velit quidem ipsa doloribus?
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
