"use client";
import store from "@/lib/store/store";
import {
  article,
  textLight,
  textDark,
} from "@/styles/MemberLine";

const MemberLine = () => {
  const { dark } = store();
  return (
    <article className={article}>
      <section className={dark ? textDark : textLight}>Sign in / Guest</section>
      <section className={dark ? textDark : textLight}>Create Account</section>
    </article>
  );
};

export default MemberLine;
