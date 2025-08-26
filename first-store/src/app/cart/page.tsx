/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import CartCalculate from '@/components/shared/CartCalculate';
import CartList from '@/components/shared/CartList';
import { RootState } from '@/lib/store/store';
import { useSelector } from 'react-redux';
const page = () => {
  const dark = useSelector((state: RootState) => state.theme.dark);
  const cart = useSelector((state: RootState) => state.cartSlice.cart);

  return (
    <div className={`${dark && 'bg-gray-700'} min-h-screen transition duration-500`}>
      <div className='mx-auto flex flex-col px-5 pt-16 max-w-7xl'>
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
            <div className='flex flex-col sm:flex-row sm:justify-between'>
              <CartList />
              <CartCalculate />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
