import Navbar from "@/components/shared/Navbar";
import UserLine from "@/components/shared/UserLine";

const page = () => {
  return (
    <>
      <header>
        <UserLine />
        <Navbar />
      </header>
      <main>main one</main>
      <footer>footer one</footer>
    </>
  );
};

export default page;
