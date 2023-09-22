import Image from "next/image";

export default async function ProductDetailPage({ params }) {
  const res = await fetch(`https://dummyjson.com/products/${params.productId}`);
  const singleProduct = await res.json();
  return (
    <div className="grid place-content-center">
      <div className=" border-2 w-[400px] rounded-lg hover:border-5 border-red-400">
        <Image
          src={singleProduct.thumbnail}
          alt="thumbnails"
          width={400}
          height={400}
        ></Image>
        <h1 className="mb-4 font-bold text-2xl ml-3">{singleProduct.title}</h1>
        <ul className="ml-3">
          <li>{singleProduct.description}</li>
          <li className="mt-2">PRICE-{singleProduct.price} $</li>
          <li className="hover:text-purple-600">
            DISCOUNT-{singleProduct.discountPercentage}%
          </li>
          <li>RATTING-{singleProduct.rating}</li>
          <li>STOCK-{singleProduct.stock}</li>
          <li className="mb-2">BRAND-{singleProduct.brand}</li>
        </ul>
      </div>
    </div>
  );
}
