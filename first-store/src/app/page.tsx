"use client";
import MainSlider from "@/components/shared/MainSlider";
import MainText from "@/components/shared/MainText";
import Navbar from "@/components/shared/Navbar";
import UserLine from "@/components/shared/UserLine";
import store from "@/lib/store/store";

const page = () => {
  const { dark } = store();
  return (
    <div className="w-full">
      <header className={`${dark ? "bg-gray-900" : "bg-gray-200"}`}>
        <UserLine />
        <Navbar />
      </header>
      <main
        className={`${
          dark && "bg-gray-700"
        } h-full w-full`}
      >
        <div className="max-w-7xl flex justify-center items-center py-5 mx-auto">
          <MainText />
          <MainSlider />
        </div>
      </main>
      <footer>footer one</footer>
    </div>
  );
};

export default page;
