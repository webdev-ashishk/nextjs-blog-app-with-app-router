import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <nav className="mt-10 ml-10 sticky ">
      <ul className="flex gap-5 text-4xl font-bold text-purple-500 text-center">
        <li className="">
          <Link href="/">HOME</Link>
        </li>
        <li>
          <Link href="/blogs">BLOGS</Link>
        </li>
        <li>
          <Link href="/products">PRODUCTS</Link>
        </li>
      </ul>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
    </nav>
  );
};

export default Header;
