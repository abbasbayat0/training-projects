'use client';
import useFetchSingleProduct from '@/lib/hooks/useFetchSingleProduct';
import type { SingleProduct } from '@/lib/types/types';
import { useParams } from 'next/navigation';

const SingleProduct = () => {
  const { id } = useParams();
  const { status, data } = useFetchSingleProduct(Number(id));
  if (status === 'success') console.log(data?.data.data);
  return <div>SingleProduct</div>;
};

export default SingleProduct;
