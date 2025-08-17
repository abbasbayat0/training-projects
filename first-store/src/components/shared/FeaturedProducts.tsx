"use client";
import useFetchFeatured from "@/lib/hooks/useFetchFeatured";
import store from "@/lib/store/store";
import { Product } from "@/lib/types/types";

const FeaturedProducts = () => {
  const { dark } = store();
  const { status, data } = useFetchFeatured();
  let products: Product[] = [];
  if (status === "success") products = [...data?.data.data];

  return (
    <div className="max-w-7xl flex flex-col justify-center items-center p-5">
      <div className="flex justify-start items-start w-full">
        <h1 className={`${dark ? "text-white" : ""} text-3xl w-1/2 opacity-80`}>
          Featured Products
        </h1>
      </div>
      <div
        className={`w-5/6 h-[1px] border mt-3 shadow bg-black mx-auto opacity-50`}
      ></div>
      <div>
        {products.length === 0 ? (
          <h1 className={`${dark && "text-white"} mt-5`}>Loading Data ...</h1>
        ) : (
          <div className={`mt-10 flex flex-col flex-wrap gap-10 w-full p-5`}>
            {products.map(({ id, attributes }) => {
              return (
                <div
                  key={id}
                  className={`shadow-xl hover:shadow-2xl flex flex-col justify-center items-center rounded-xl mx-auto p-5`}
                >
                  <div className="w-54 h-60 bg-amber-200 rounded-xl overflow-hidden flex justify-center items-center">
                    <img src={attributes.image} alt={attributes.title} className="object-cover" />
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <p className={`text-nowrap mt-2`}>{attributes.title}</p>
                    <p className="mx-auto my-2 text-sm opacity-80">${attributes.price}</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturedProducts;
