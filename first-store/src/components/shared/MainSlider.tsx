"use client";
import images from "@/assets/sliderImages";
import store from "@/lib/store/store";
import Image from "next/image";

const MainSlider = () => {
  const { dark } = store();
  return (
    <article className={`hidden sm:flex sm:w-1/3 mr-2`}>
      <section
        className={`flex justify-start items-center gap-3 px-4 py-5 rounded-xl w-full overflow-scroll scroll-smooth ${
          dark ? "bg-gray-600" : "bg-gray-700"
        }`}
      >
        {images.map((image) => {
          return (
            <div
              key={image.id}
              className="min-w-52 h-80 overflow-hidden rounded-xl flex justify-start"
            >
              <Image
                src={image.link}
                alt="slider Image"
                className="object-cover"
              />
            </div>
          );
        })}
      </section>
    </article>
  );
};

export default MainSlider;
