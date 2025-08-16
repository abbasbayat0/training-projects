"use client"
import MainSlider from "@/components/shared/MainSlider";
import MainText from "@/components/shared/MainText";
import Navbar from "@/components/shared/Navbar";
import UserLine from "@/components/shared/UserLine";
import store from "@/lib/store/store";

const page = () => {
  const { dark } = store();
  return (
    <div>
      <header>
        <UserLine />
        <Navbar />
      </header>
      <main
        className={`${
          dark && "bg-gray-700"
        } flex justify-center items-center h-full w-full max-w-7xl py-5 mx-auto`}
      >
        <MainText />
        <MainSlider />
      </main>
      <footer>footer one</footer>
    </div>
  );
};

export default page;
