import Link from "next/link";
import { Suspense } from "react";
import Loading from "./loading";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Blogs() {
  const data = await getData();
  // console.log(data);

  return (
    <main>
      <div className="border-2 mx-10 flex lg:flex-row lg:border-none md:flex-col sm:flex-col xs:flex-col xs:bg-green-300 rounded-2xl">
        <button className=" border-red-500 hover:border-purple-500 hover:bg-blue-900 bg-blue-800 p-3 rounded-lg font-bold  text-2xl mx-3 md:my-2 sm:my-2 text-red-500 my-2 ">
          string-length-more-than-20
        </button>
        <button className="hover:border-purple-500 hover:bg-blue-900 bg-blue-800 p-3 rounded-lg font-bold  text-2xl mx-3 md:my-2 sm:my-2 text-red-500 my-2">
          string-length-less-than-20
        </button>
      </div>
      <Suspense fallback={<Loading />}>
        <ul>
          {data &&
            data.map((_data) => {
              return (
                <>
                  <div>
                    <li className="text-purple-600 hover:bg-blue-500 text-2xl border border-green-400 mt-4 hover:text-white rounded-md ml-10 mr-10">
                      <span className="ml-3 text-white font-bold">
                        {_data.id} .
                      </span>
                      <Link href={`/blogs/${_data.id}`}>{_data?.title}</Link>
                    </li>
                  </div>
                </>
              );
            })}
        </ul>
      </Suspense>
    </main>
  );
}
