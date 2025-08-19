'use client';
import SinglePro from '@/components/shared/SingleProduct';
import type { SingleProduct } from '@/lib/types/types';
const page = ({ id }: SingleProduct) => {
  return (
    <div>
      <SinglePro id={id} />
    </div>
  );
};

export default page;
