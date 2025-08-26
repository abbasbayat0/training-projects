import { useDispatch, useSelector } from 'react-redux';
import formatted from '@/lib/utils/formatPrice';
import { removeItem, updateAmount } from '@/lib/features/cartSlice';
import { RootState } from '@/lib/store/store';

const CartList = () => {
  const dispatch = useDispatch();
  const selectOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  const dark = useSelector((state: RootState) => state.theme.dark);
  const cart = useSelector((state: RootState) => state.cartSlice.cart);
  return (
    <div>
      {cart.map((item, index) => {
        const formattedPrice = formatted(Number(item.attributes?.price)).split('$');
        return (
          <div key={index} className='mt-10'>
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
              <div className='flex items-center justify-center gap-2'>
                <p className={`${dark && 'text-white'} opacity-80`}>color:</p>
                <div
                  style={{ backgroundColor: item.attributes.color }}
                  className={`h-4 w-4 cursor-pointer rounded-full`}
                ></div>
              </div>
              <div className='mt-1 flex items-center justify-center gap-2'>
                <p className={`${dark && 'text-white'} opacity-80`}>Amount:</p>
                <select
                  defaultValue={item.attributes.amount}
                  onChange={(e) =>
                    dispatch(
                      updateAmount({
                        amount: Number(e.target.value),
                        id: item.id,
                        color: item.attributes.color,
                      }),
                    )
                  }
                  name='amount'
                  id='amount'
                  className={`w-1/2 cursor-pointer rounded-xl border px-2 opacity-80 focus:outline-none ${dark && 'bg-gray-700 text-white'}`}
                >
                  {selectOptions.map((i) => {
                    return (
                      <option key={i} value={i}>
                        {i}
                      </option>
                    );
                  })}
                </select>
              </div>
              <p
                className='my-2 cursor-pointer text-center text-red-400'
                onClick={() => dispatch(removeItem({ id: item.id, color: item.attributes.color }))}
              >
                remove
              </p>
              <p
                className={`text-center text-lg font-light opacity-80 ${dark && 'text-white'} transition duration-500`}
              >
                $ {(Number(formattedPrice[1]) * item.attributes.amount).toFixed(2)}
              </p>
            </div>
          </div>
        );
      })}
      
    </div>
  );
};

export default CartList;
