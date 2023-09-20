import { Suspense } from "react";
import Loading from "./loading";
import Link from "next/link";

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
      <h1>Blogs</h1>
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
