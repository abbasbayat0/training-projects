'use client';
import { RootState } from '@/lib/store/store';
import store from '@/lib/store/storev';
import Link from 'next/link';
import { useSelector } from 'react-redux';

const MainText = () => {
  const { setActivePage } = store();
  const dark = useSelector((state: RootState) => state.theme.dark);

  return (
    <article className={`p-5 sm:w-2/3`}>
      <section className='align-center mt-5 flex max-w-7xl flex-col justify-start gap-5 sm:gap-8'>
        <h1
          className={`text-4xl font-bold opacity-70 sm:text-5xl ${dark && 'text-white'} transition duration-500`}
        >
          We are changing the way people shop
        </h1>
        <p
          className={`text-sm opacity-70 sm:text-base ${dark && 'text-white'} transition duration-500`}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nesciunt voluptatum,
          exercitationem nisi iusto maiores distinctio, repellat dignissimos officiis velit
          perspiciatis. Rerum animi facere culpa eos porro exercitationem. Ab, tempore?
        </p>
        <Link
          onClick={() => setActivePage('/products')}
          href='/products'
          className={`w-auto max-w-36 rounded-xl p-2 py-3 text-sm text-nowrap text-white opacity-90 ${
            dark ? 'bg-pink-600' : 'bg-blue-600'
          } cursor-pointer text-center transition duration-500 select-none`}
        >
          OUR PRODUCTS
        </Link>
      </section>
    </article>
  );
};

export default MainText;
