import store from "@/lib/store/store";

const UserLine = () => {
  const { dark } = store();
  return (
    <section
      className={`${
        dark ? "bg-gray-600" : "bg-gray-800"
      } mx-auto flex justify-center gap-5 py-2`}
    >
      <p className="cursor-pointer text-xs font-thin text-white opacity-80 select-none hover:underline sm:text-[14px]">
        Sign In / Guest
      </p>
      <p className="cursor-pointer text-xs font-thin text-white opacity-80 select-none hover:underline sm:text-[14px]">
        Create Account
      </p>
    </section>
  );
};

export default UserLine;
