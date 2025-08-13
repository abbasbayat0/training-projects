"use client";
import { TiThMenu } from "react-icons/ti";
import { FaMoon } from "react-icons/fa";
import { IoIosSunny } from "react-icons/io";
import { SlBasket } from "react-icons/sl";
import store from "@/lib/store/store";
import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineProduct } from "react-icons/ai";
import { IoPersonAddOutline } from "react-icons/io5";
import { IoBagCheckOutline } from "react-icons/io5";
import { CiViewList } from "react-icons/ci";
import {
  article,
  basket,
  containerDiv,
  leftSection,
  linkDiv,
  menu,
  moon,
  rightDiv,
  rightSection,
  sun,
  count,
  activeDiv,
  activeIcon,
  activeTitle,
  commonTitle,
} from "@/styles/SmallNav";

const listOfNav = [
  { title: "Home", icon: <IoHomeOutline />, link: "/" },
  { title: "Product", icon: <AiOutlineProduct />, link: "/product" },
  { title: "Cart", icon: <SlBasket />, link: "/cart" },
  { title: "About", icon: <IoPersonAddOutline />, link: "/about" },
  { title: "CheckOut", icon: <IoBagCheckOutline />, link: "/checkout" },
  { title: "Order", icon: <CiViewList />, link: "/order" },
];

const SmallNav = () => {
  const { dark } = store();
  const url = window.location.pathname;
  return (
    <article className={article}>
      <section className={leftSection}>
        <TiThMenu className={menu} />
        <div className={containerDiv}>
          {listOfNav.map((link) => {
            const active = url === link.link;
            return (
              <div key={link.title} className={active ? activeDiv : linkDiv}>
                <p className={`${active ? activeIcon : ""}`}>{link.icon}</p>
                <p className={`${active ? activeTitle : commonTitle}`}>
                  {link.title}
                </p>
              </div>
            );
          })}
        </div>
      </section>
      <section className={rightSection}>
        {dark ? <IoIosSunny className={sun} /> : <FaMoon className={moon} />}

        <div className={rightDiv}>
          <SlBasket className={basket} />
          <div className={count}>2</div>
        </div>
      </section>
    </article>
  );
};

export default SmallNav;
