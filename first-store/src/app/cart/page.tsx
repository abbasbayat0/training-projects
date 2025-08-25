'use client';
import store from '@/lib/store/storev';
const page = () => {
  const { dark, cart } = store();
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
          <div></div>
        )}
      </div>
    </div>
  );
};

export default page;
