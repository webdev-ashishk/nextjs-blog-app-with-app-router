import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <nav className="mt-10 ml-10 sticky ">
      <ul className="flex gap-5 text-4xl font-bold text-purple-500 text-center">
        <li>
          <Link
            href="/"
            className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 rounded-lg px-5 py-2.5 mr-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-red-800
              font-bold text-2xl"
          >
            HOME
          </Link>
        </li>
        <li>
          <Link
            href="/blogs"
            className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 rounded-lg px-5 py-2.5 mr-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-red-800
              font-bold text-2xl"
          >
            BLOGS
          </Link>
        </li>
        <li>
          <Link
            href="/products"
            className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 rounded-lg px-5 py-2.5 mr-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-red-800
              font-bold text-2xl"
          >
            PRODUCTS
          </Link>
        </li>
      </ul>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
    </nav>
  );
};

export default Header;
