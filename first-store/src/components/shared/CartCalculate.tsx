import { RootState } from '@/lib/store/store';
import { calculateTotal } from '@/lib/utils/calculateTotal';
import { useSelector } from 'react-redux';

const CartCalculate = () => {
  const cart = useSelector((state: RootState) => state.cartSlice.cart);
  const { totalPrice } = calculateTotal(cart);
  const dark = useSelector((state: RootState) => state.theme.dark);
  return (
    <div>
      <div
        className={`mx-auto mt-20 mb-10 flex w-64 flex-col items-center justify-center rounded-xl py-10 ${dark ? 'bg-gray-800' : 'bg-gray-300'} sm:mt-16`}
      >
        <div className='w-full'>
          <div className='mx-auto flex w-9/12 justify-between'>
            <p
              className={`${dark && 'text-white'} text-sm text-[12px] font-thin tracking-wide opacity-90`}
            >
              Subtotal
            </p>
            <p className={`${dark && 'text-white'} text-[14px] opacity-90`}>${totalPrice / 100}</p>
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
            ${(totalPrice / 100 + Math.ceil(totalPrice / 1000) + 5.0).toFixed(2)}
          </p>
        </div>
      </div>
      <div className='flex w-full justify-center'>
        <button
          className={`mx-auto mb-10 rounded-xl px-8 py-3 opacity-70 ${dark ? 'bg-pink-500' : 'bg-blue-700 text-white'}`}
        >
          PLEASE LOG IN
        </button>
      </div>
    </div>
  );
};

export default CartCalculate;
