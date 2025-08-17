"use client";
import FeaturedProducts from "@/components/shared/FeaturedProducts";
import MainSlider from "@/components/shared/MainSlider";
import MainText from "@/components/shared/MainText";
import Navbar from "@/components/shared/Navbar";
import UserLine from "@/components/shared/UserLine";
import store from "@/lib/store/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const page = () => {
  const queryClient = new QueryClient();
  const { dark } = store();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="w-full">
        <header className={`${dark ? "bg-gray-900" : "bg-gray-200"}`}>
          <UserLine />
          <Navbar />
        </header>
        <main className={`${dark && "bg-gray-700"} w-full`}>
          <div className="mx-auto flex max-w-7xl items-center justify-center py-5">
            <MainText />
            <MainSlider />
          </div>
        </main>
        <footer className={`${dark && "bg-gray-700"} w-full`}>
          <FeaturedProducts />
        </footer>
      </div>
    </QueryClientProvider>
  );
};

export default page;
