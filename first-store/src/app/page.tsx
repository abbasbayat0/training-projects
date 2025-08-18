'use client';
import FeaturedProducts from '@/components/shared/FeaturedProducts';
import MainSlider from '@/components/shared/MainSlider';
import MainText from '@/components/shared/MainText';
import store from '@/lib/store/store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const page = () => {
  const queryClient = new QueryClient();
  const { dark } = store();
  return (
    <QueryClientProvider client={queryClient}>
      <div className='w-full'>
        <main className={`${dark && 'bg-gray-700'} w-full transition duration-500`}>
          <div className='mx-auto flex max-w-7xl items-center justify-center py-5 transition duration-500'>
            <MainText />
            <MainSlider />
          </div>
        </main>
        <footer className={`${dark && 'bg-gray-700'} w-full transition duration-500`}>
          <FeaturedProducts />
        </footer>
      </div>
    </QueryClientProvider>
  );
};

export default page;
