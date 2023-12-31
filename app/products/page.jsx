import Image from "next/image";
import { Suspense } from "react";
import Loading from "./loading";
import Link from "next/link";

async function getData() {
  const res = await fetch("https://dummyjson.com/products");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Products() {
  const data = await getData();
  console.log(data);
  const { products } = data;
  return (
    <main>
      <h1>Product-page-rendered!!</h1>
      <Suspense fallback={<Loading />}>
        <div className="flex flex-wrap justify-center">
          {products &&
            products?.map((product) => {
              return (
                <>
                  <Link href={`/products/${product.id}`}>
                    <div
                      key="product.brand"
                      className="w-[380px] border-2 m-4 rounded-lg text-center cursor-pointer hover:border-purple-500"
                    >
                      <Image
                        src={product?.thumbnail}
                        alt="Produt-image"
                        width={300}
                        height={300}
                      ></Image>
                      <h1 className="font-bold text-2xl m-3">
                        {product?.title}
                      </h1>
                      <ul>
                        {/* <li>{product.description}</li> */}
                        <span className="text-yellow-400">
                          rating-{product.rating}
                        </span>
                        <li className="text-2xl font-bold text-purple-500">
                          Price - {product.price} $
                        </li>
                      </ul>
                    </div>
                  </Link>
                </>
              );
            })}
        </div>
      </Suspense>
    </main>
  );
}
