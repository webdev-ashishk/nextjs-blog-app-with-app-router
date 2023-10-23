import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    // <nav className="mt-10 ml-10 sticky ">
    //   <ul className="flex gap-5 text-4xl font-bold text-purple-500 text-center">
    //     <li>
    //       <Link
    //         href="/"
    //         className="text-white  focus:ring-2 rounded-lg px-5 py-2.5 mr-2 mb-2 first-letter:focus:outline-none dark:focus:bg-purple-800 font-bold text-2xl"
    //       >
    //         HOME
    //       </Link>
    //     </li>
    //     <li>
    //       <Link
    //         href="/blogs"
    //         className="text-white  focus:ring-2 rounded-lg px-5 py-2.5 mr-2 mb-2 first-letter:focus:outline-none dark:focus:bg-purple-800 font-bold text-2xl"
    //       >
    //         BLOGS
    //       </Link>
    //     </li>
    //     <li>
    //       <Link
    //         href="/products"
    //         className="text-white  focus:ring-2 rounded-lg px-5 py-2.5 mr-2 mb-2 first-letter:focus:outline-none dark:focus:bg-purple-800 font-bold text-2xl"
    //       >
    //         PRODUCTS
    //       </Link>
    //     </li>
    //   </ul>
    //   <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
    // </nav>

    <nav class="bg-white border-gray-200 dark:bg-gray-900 text-3xl font-bold p-5">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" class="flex items-center">
          <Image
            src="https://flowbite.com/docs/images/logo.svg"
            class="h-8 mr-3"
            alt="Flowbite-Logo"
            width={100}
            height={100}
          />
          <span class="self-center whitespace-nowrap dark:text-white text-3xl font-bold">
            Flowbite
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                href="/"
                class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/blogs"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
