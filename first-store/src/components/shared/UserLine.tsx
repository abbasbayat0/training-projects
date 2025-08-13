"use client";
import store from "@/lib/store/store";

const UserLine = () => {
  const { dark } = store();
  return (
    <article className={`${dark ? "bg-gray-600" : "bg-gray-800"} w-full`}>
      <section className="max-w-7xl flex justify-center items-center gap-5 py-2 sm:justify-end sm:px-10">
        <p className="text-xs text-white font-thin opacity-80 cursor-pointer select-none hover:underline sm:text-[14px]">
          Sign In / Guest
        </p>
        <p className="text-xs text-white font-thin opacity-80 cursor-pointer select-none hover:underline sm:text-[14px]">
          Create Account
        </p>
      </section>
    </article>
  );
};

export default UserLine;
