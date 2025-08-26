'use client';
import { RootState } from '@/lib/store/store';
import formatted from '@/lib/utils/formatPrice';
import { useSelector } from 'react-redux';
const page = () => {
  const dark = useSelector((state: RootState) => state.theme.dark);
  const cart = useSelector((state: RootState) => state.cartSlice.cart);
  return (
    <div className={`${dark && 'bg-gray-700'} min-h-screen transition duration-500`}>
      <div className='mx-auto flex flex-col px-5 pt-16 md:flex-row md:justify-around md:pb-16'>
        {cart.length === 0 ? (
          <div>
            <h1 className={`${dark && 'text-white'} text-center text-3xl font-bold`}>
              Your Cart Is Empty !
            </h1>
            <div className={`mx-auto mt-3 h-[1px] w-full border bg-black opacity-20 shadow`}></div>
          </div>
        ) : (
          <div>
            <div>
              <h1 className={`${dark && 'text-white'} text-center text-3xl font-bold`}>
                Shopping Cart
              </h1>
              <div
                className={`mx-auto mt-3 h-[1px] w-full border bg-black opacity-20 shadow`}
              ></div>
            </div>
            <div>
              {cart.map((item) => {
                return (
                  <div key={item.id} className='mt-10'>
                    <img
                      src={item.attributes?.image}
                      alt={item.attributes?.title}
                      className='mx-auto mt-5 w-8/12 max-w-md rounded-xl'
                    />
                    <div className='mt-5 md:w-1/2'>
                      <h1
                        className={`mx-auto text-center text-xl font-bold text-gray-800 capitalize opacity-80 ${dark && 'text-white'} transition duration-500`}
                      >
                        {item.attributes?.title}
                      </h1>
                      <h2
                        className={`mt-1 text-center tracking-wider text-gray-800 capitalize opacity-50 ${dark && 'text-white'} transition duration-500`}
                      >
                        {item.attributes?.company}
                      </h2>
                      <p
                        className={`text-center text-lg font-light opacity-80 ${dark && 'text-white'} transition duration-500`}
                      >
                        {formatted(Number(item.attributes?.price))}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
