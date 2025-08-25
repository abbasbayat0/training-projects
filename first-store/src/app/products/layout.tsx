'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { store } from '@/lib/store/store';
import { Provider } from 'react-redux';

const ProductsLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>{children}</Provider>
    </QueryClientProvider>
  );
};

export default ProductsLayout;
