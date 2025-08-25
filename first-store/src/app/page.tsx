'use client';
import AppProvider from '@/components/shared/AppProvider';
import FeaturedProducts from '@/components/shared/FeaturedProducts';
import MainSlider from '@/components/shared/MainSlider';
import MainText from '@/components/shared/MainText';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const page = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <main className={`w-full`}>
          <div className='mx-auto flex max-w-7xl items-center justify-center py-5'>
            <MainText />
            <MainSlider />
          </div>
        </main>
        <footer className={`w-full`}>
          <FeaturedProducts />
        </footer>
      </AppProvider>
    </QueryClientProvider>
  );
};

export default page;
