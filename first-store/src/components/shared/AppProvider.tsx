import { RootState } from '@/lib/store/store';
import React from 'react';
import { useSelector } from 'react-redux';

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const dark = useSelector((state: RootState) => state.theme.dark);
  return (
    <div className={`min-h-screen w-full ${dark && 'bg-gray-700'} transition duration-500`}>
      {children}
    </div>
  );
};

export default AppProvider;
