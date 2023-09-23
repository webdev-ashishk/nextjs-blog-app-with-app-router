import Image from "next/image";

export default async function ProductDetailPage({ params }) {
  const res = await fetch(`https://dummyjson.com/products/${params.productId}`);
  const singleProduct = await res.json();
  return (
    <div className="flex flex-wrap justify-center">
      <div className="border-2 rounded-l-lg bg-gray-300">
        <Image
          src={singleProduct.images[0]}
          alt="thumbnails"
          width={400}
          height={200}
          className="rounded-t-lg"
        ></Image>
        {/* //mr-10 ml-3 mt-10 */}
        <div className="flex justify-between ml-3 mt-4">
          <button
            type="button"
            className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 rounded-lg px-5 py-2.5 mr-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800
              font-bold text-2xl
              "
          >
            ADD TO CARD
          </button>

          <button
            type="button"
            className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300  rounded-lg  font-bold text-2xl px-5 py-2.5 mr-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800"
          >
            BUY
          </button>
        </div>
      </div>
      <div className="border w-[400px] bg-gray-500 rounded-r-lg">
        <h1 className="mb-4 font-bold text-3xl ml-3">{singleProduct.title}</h1>
        <ul className="ml-3">
          <li className="text-1xl">{singleProduct.description}</li>
          <li className="mt-2 text-2xl font-bold">
            PRICE-{singleProduct.price} $
          </li>
          <li>DISCOUNT-{singleProduct.discountPercentage}%</li>
          <li>RATTING-{singleProduct.rating}</li>
          <li>STOCK-{singleProduct.stock}</li>
          <li className="mb-2">BRAND-{singleProduct.brand}</li>
        </ul>
      </div>
    </div>
  );
}
