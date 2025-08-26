/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import CartList from '@/components/shared/CartList';
import { RootState } from '@/lib/store/store';
import { calculateTotal } from '@/lib/utils/calculateTotal';
import { useSelector } from 'react-redux';
const page = () => {
  const dark = useSelector((state: RootState) => state.theme.dark);
  const cart = useSelector((state: RootState) => state.cartSlice.cart);
  const { totalPrice } = calculateTotal(cart);

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
            <CartList />
            <div
              className={`mx-auto mt-20 mb-10 flex w-10/12 flex-col items-center justify-center rounded-xl py-10 ${dark && 'bg-gray-800'}`}
            >
              <div className='w-full'>
                <div className='mx-auto flex w-9/12 justify-between'>
                  <p
                    className={`${dark && 'text-white'} text-sm text-[12px] font-thin tracking-wide opacity-90`}
                  >
                    Subtotal
                  </p>
                  <p className={`${dark && 'text-white'} text-[14px] opacity-90`}>
                    ${totalPrice / 100}
                  </p>
                </div>
                <div className='mx-auto mt-1 h-[1px] w-10/12 bg-black'></div>
              </div>
              <div className='mt-2 w-full'>
                <div className='mx-auto flex w-9/12 justify-between'>
                  <p
                    className={`${dark && 'text-white'} text-sm text-[12px] font-thin tracking-wide opacity-90`}
                  >
                    Shipping
                  </p>
                  <p className={`${dark && 'text-white'} text-[14px] opacity-90`}>$5.00</p>
                </div>
                <div className='mx-auto mt-1 h-[1px] w-10/12 bg-black'></div>
              </div>
              <div className='mt-2 w-full'>
                <div className='mx-auto flex w-9/12 justify-between'>
                  <p
                    className={`${dark && 'text-white'} text-sm text-[12px] font-thin tracking-wide opacity-90`}
                  >
                    Tax
                  </p>
                  <p className={`${dark && 'text-white'} text-[14px] opacity-90`}>
                    $ {Math.ceil(totalPrice / 1000)}.00
                  </p>
                </div>
                <div className='mx-auto mt-1 h-[1px] w-10/12 bg-black'></div>
              </div>

              <div className='mt-5 flex gap-10'>
                <p className={`${dark && 'text-white'}`}>Order Total</p>
                <p className={`${dark && 'text-white'} font-bold`}>
                  ${totalPrice / 100 + Math.ceil(totalPrice / 1000) + 5.0}
                </p>
              </div>
            </div>
            <div className='w-full flex justify-center'>
              <button
                className={`mx-auto mb-10 rounded-xl px-8 py-3 opacity-70 ${dark && 'bg-pink-500'}`}
              >
                PLEASE LOG IN
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
