"use client";
import store from "@/lib/store/store";

const MainText = () => {
  const { dark } = store();
  return (
    <article className={`p-5 sm:w-2/3`}>
      <section className="max-w-7xl flex flex-col gap-5 justify-start align-center mt-5 sm:gap-8">
        <h1
          className={`text-4xl font-bold opacity-70 sm:text-5xl ${
            dark && "text-white"
          }`}
        >
          We are changing the way people shop
        </h1>
        <p
          className={`text-sm opacity-70 sm:text-base ${dark && "text-white"}`}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          nesciunt voluptatum, exercitationem nisi iusto maiores distinctio,
          repellat dignissimos officiis velit perspiciatis. Rerum animi facere
          culpa eos porro exercitationem. Ab, tempore?
        </p>
        <button
          className={`p-2 w-auto text-sm py-3 text-nowrap opacity-90 max-w-36 rounded-xl text-white ${
            dark ? "bg-pink-600" : "bg-blue-600"
          }`}
        >
          OUR PRODUCTS
        </button>
      </section>
    </article>
  );
};

export default MainText;
