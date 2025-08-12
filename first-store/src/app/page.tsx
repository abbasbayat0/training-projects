import MemberLine from "@/components/shared/MemberLine";
import Navbar from "@/components/shared/Navbar";

const page = () => {
  return (
    <>
      <header>
        <MemberLine />
        <Navbar />
      </header>
      <main>main one</main>
      <footer>footer one</footer>
    </>
  );
};

export default page;
