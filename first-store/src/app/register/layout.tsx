import LayoutProvider from '@/components/shared/LayoutProvider';
import React from 'react';

const layout = ({ children }: { children: React.ReactNode }) => {
  return <LayoutProvider>{children}</LayoutProvider>;
};

export default layout;
