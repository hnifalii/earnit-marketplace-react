import React, { useState } from "react";
import { Link } from "react-router-dom";

// Icons
import { MdStar } from "react-icons/md";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { IoCartOutline, IoCartSharp } from "react-icons/io5";

// Hooks
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

function TrendingProduct() {
  const [cart, setCart] = useState(false);
  const [wishlist, setWishlist] = useState(false);
  const { id } = useParams();

  const { loading, error, data } = useFetch(
    "http://localhost:1337/api/sections?populate=*"
  );

  if (loading) return <p>Product Loading...</p>;
  if (error) return <p>Product Error!</p>;

  console.log(data);

  return (
    <>
      <div className="flex justify-between flex-wrap flex-row pt-6 px-28">
        {/* Image Preview */}
        <div className="flex flex-wrap flex-row">
          {/* Image Slider */}
          {/* {data.data.map((product) => (
            <div className="grid gap-[10px]">
              <Link to="">
                <div key={product.id} className="flex w-20 h-20 border object-contain items-center rounded-md">
                  <img src={`http://localhost:1337${data.data[id-1].attributes.img.data[0].attributes.url}`}/>
                </div>
              </Link>
            </div>
          ))} */}
          <div className="flex flex-col gap-[10px]">
            <Link to="#">
              <div className="flex w-20 h-20 border object-contain items-center rounded-md outline outline-1 outline-primary shadow-md">
                <img
                  src={`http://localhost:1337${
                    data.data[id-1].attributes.img.data[0].attributes.url
                  }`}
                  alt="preview-img"
                  className="-rounded-md"
                />
              </div>
            </Link>
            <Link to="#">
              <div className="flex w-20 h-20 border object-contain items-center rounded-md">
                <img
                  src={`http://localhost:1337${
                    data.data[id-1].attributes.img.data[0].attributes.url
                  }`}
                  alt="preview-img"
                  className="rounded-md"
                />
              </div>
            </Link>
            <Link to="#">
              <div className="flex w-20 h-20 border object-contain items-center rounded-md">
                <img
                  src={`http://localhost:1337${
                    data.data[id-1].attributes.img.data[0].attributes.url
                  }`}
                  alt="preview-img"
                  className="rounded-md"
                />
              </div>
            </Link>
            <Link to="#">
              <div className="flex w-20 h-20 border object-contain items-center rounded-md">
                <img
                  src={`http://localhost:1337${
                    data.data[id-1].attributes.img.data[0].attributes.url
                  }`}
                  alt="preview-img"
                  className="rounded-md"
                />
              </div>
            </Link>
          </div>

          {/* Image of Product */}
          <div className="flex mx-4 bg-gray-100 w-[350px] h-[350px] border rounded-md object-contain items-center">
            <img
              src={`http://localhost:1337${
                data.data[id-1].attributes.img.data[0].attributes.url
              }`}
              alt="product-img"
            />
          </div>

          {/* Product Details */}
          <div className="grid max-w-[545px]">
            {/* Product Header */}
            <div className="flex flex-col gap-1">
              <h1 className="text-xl font-semibold">
                {data.data[id-1].attributes.title}
              </h1>

              <div className="flex flex-row items-center gap-2">
                <h4 className="flex items-center gap-1 text-primary">
                  <MdStar size={20} />
                  <span className="text-gray-500 text-sm">
                    {data.data[id-1].attributes.rating}
                  </span>
                </h4>

                <div className="w-0.5 h-0.5 rounded-full bg-gray-400" />

                <h4 className="text-gray-500 text-sm">
                  <span className="font-medium">
                    {data.data[id-1].attributes.totalReview}
                  </span>{" "}
                  ulasan
                </h4>

                <div className="w-0.5 h-4 bg-gray-400" />

                <h4 className="text-gray-500 text-sm">
                  <span className="font-medium">
                    {data.data[id-1].attributes.totalSales}
                  </span>{" "}
                  terjual
                </h4>
              </div>
              <h2 className="text-primary font-bold text-3xl mt-1">
                Rp{data.data[id-1].attributes.price.toLocaleString("id-ID")}
              </h2>
            </div>

            {/* Product variation */}
            <div className="flex flex-col w-full -mt-10">
              <div className="border-t py-2">
                <p className="text-sm font-medium text-primary">Ukuran</p>
                <div className="flex gap-2 mt-1">
                  <button className="text-sm font-medium text-primary py-2 px-4 rounded-md border focus:border-primary">
                    38
                  </button>
                  <button className="text-sm font-medium text-primary py-2 px-4 rounded-md border focus:border-primary">
                    39
                  </button>
                  <button className="text-sm font-medium text-primary py-2 px-4 rounded-md border focus:border-primary">
                    40
                  </button>
                  <button className="text-sm font-medium text-primary py-2 px-4 rounded-md border focus:border-primary">
                    41
                  </button>
                  <button className="text-sm font-medium text-primary py-2 px-4 rounded-md border focus:border-primary">
                    42
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap flex-row w-screen max-w-[550px] justify-between items-end">
              <Link to="/buy" className="">
                <button
                  id="buyNow"
                  className="flex bg-primary rounded-md w-full max-w-[500px] px-44 py-2 font-medium text-center text-white"
                >
                  Beli Sekarang
                </button>
              </Link>
              <Link to="#">
                <button
                  id="addToCart"
                  className="flex border-primary rounded-md border w-10 h-10 justify-center items-center"
                  onClick={() => setCart(!cart)}
                >
                  {cart ? (
                    <IoCartSharp size={24} className="text-primary" />
                  ) : (
                    <IoCartOutline size={24} className="text-primary" />
                  )}
                </button>
              </Link>
              <Link to="#">
                <button
                  id="addToWishlist"
                  className="flex border-primary rounded-md border w-10 h-10 justify-center items-center"
                  onClick={() => setWishlist(!wishlist)}
                >
                  {wishlist ? (
                    <FaHeart size={18} className="text-primary" />
                  ) : (
                    <FaRegHeart size={18} className="text-primary" />
                  )}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Description of Product */}
      <div className="grid px-28 mt-12">
        <p className="flex justify-center font-bold mb-2">Deskripsi</p>
        {data.data[id - 1].attributes.description}
      </div>

      {/* Reveiw of Product */}
      <div>
        <p className="flex justify-center font-bold pb-6">Ulasan</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem, doloribus.
        </p>
      </div>

      <div>
        <div className="flex justify-center font-bold pb-6">
          <p>Related Product</p>
        </div>

        <div className="flex flex-wrap flex-row gap-6">
          <div className="border p-4 mb-8">
            <p>Product 1</p>
          </div>

          <div className="border p-4 mb-8">
            <p>Product 1</p>
          </div>

          <div className="border p-4 mb-8">
            <p>Product 1</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default TrendingProduct;
