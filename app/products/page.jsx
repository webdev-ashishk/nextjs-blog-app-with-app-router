import Image from "next/image";

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
      <div className="border-2 border-blue-400 flex flex-wrap">
        {products &&
          products?.map((product) => {
            return (
              <>
                <div
                  key="product.brand"
                  className="w-[380px] border-2 m-4 rounded-lg text-center cursor-pointer hover:border-red-200"
                >
                  <Image
                    src={product?.images[0]}
                    alt="Produt-image"
                    width={300}
                    height={300}
                  ></Image>
                  <h1 className="font-bold text-2xl m-3">{product?.title}</h1>
                  <ul>
                    <li>{product.description}</li>
                    <span className="text-yellow-400">
                      rating-{product.rating}
                    </span>
                    <li className="text-2xl font-bold text-purple-500">
                      Price - {product.price} $
                    </li>
                  </ul>
                </div>
              </>
            );
          })}
      </div>
    </main>
  );
}
