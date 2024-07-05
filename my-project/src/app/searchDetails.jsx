import React, { useState, Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick"

// Icons
import { MdStar } from "react-icons/md";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { IoCartOutline, IoCartSharp } from "react-icons/io5";

// Hooks
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

function SearchDetails() {
  const [cart, setCart] = useState(false);
  const [wishlist, setWishlist] = useState(false);
  const { id } = useParams();

  const { loading, error, data } = useFetch(
    "http://localhost:1337/api/searches?populate=*"
  );

  if (loading) return <p>Product Loading...</p>;
  if (error) return <p>Product Error!</p>;

  console.log(id);
  console.log(data);

  const settings = {
    customPaging: function(i) {
      return (
        <a>
          <img src={`http://localhost:1337${data.data[id - 1].attributes.img.data[0].attributes.url}`} />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

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
            {data.data.map((product) => (
              <button key={product.id} className="flex w-20 h-20 border object-contain items-center overflow-hidden rounded-md focus:outline outline-1 focus:outline-primary">
                <img
                  src={`http://localhost:1337${
                    data.data[id - 1].attributes.img.data[0].attributes.url
                  }`}
                  alt="preview-img"
                  
                />
              </button>
            ))}
            {/* <Link to="#">
              <div className="flex w-20 h-20 border object-contain items-center rounded-md">
                <img
                  src={`http://localhost:1337${
                    data.data[id - 1].attributes.img.data[1].attributes.url
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
                    data.data[id - 1].attributes.img.data[2].attributes.url
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
                    data.data[id - 1].attributes.img.data[3].attributes.url
                  }`}
                  alt="preview-img"
                  className="rounded-md"
                />
              </div>
            </Link> */}
          </div>

          {/* Image of Product */}
          <div className="flex mx-4 bg-gray-100 w-[350px] h-[350px] border rounded-md object-contain items-center">
            <img
              src={`http://localhost:1337${
                data.data[id - 1].attributes.img.data[0].attributes.url
              }`}
              alt="product-img"
            />
          </div>

          {/* Product Details */}
          <div className="grid max-w-[545px]">
            {/* Product Header */}
            <div className="flex flex-col gap-1">
              <h1 className="text-xl font-semibold">
                {data.data[id - 1].attributes.title}
              </h1>

              <div className="flex flex-row items-center gap-2">
                <h4 className="flex items-center gap-1 text-primary">
                  <MdStar size={20} />
                  <span className="text-gray-500 text-sm">
                    {data.data[id - 1].attributes.rating}
                  </span>
                </h4>

                <div className="w-0.5 h-0.5 rounded-full bg-gray-400" />

                <h4 className="text-gray-500 text-sm">
                  <span className="font-medium">
                    {data.data[id - 1].attributes.totalReview}
                  </span>{" "}
                  ulasan
                </h4>

                <div className="w-0.5 h-4 bg-gray-400" />

                <h4 className="text-gray-500 text-sm">
                  <span className="font-medium">
                    {data.data[id - 1].attributes.totalSales}
                  </span>{" "}
                  terjual
                </h4>
              </div>
              <h2 className="text-primary font-bold text-3xl mt-1">
                Rp{data.data[id - 1].attributes.price.toLocaleString("id-ID")}
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

            <div className="flex flex-wrap w-screen max-w-[550px] flex-row justify-between items-end">
              <Link to="/buy" className="">
                <button
                  id="buyNow"
                  className="flex bg-primary w-full max-w-[500px] rounded-md px-44 py-2 font-medium text-center text-white hover:bg-sky-500 active:scale-[0.99]"
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
      <div className="grid mx-28 mt-8 border-t pt-6">
        <p className="flex justify-center font-bold mb-2">Deskripsi</p>
        <p className="text-sm">{data.data[id - 1].attributes.description}</p>
      </div>

      {/* Review of Product */}
      <div className="grid mx-28 mt-8 border-t pt-6">
        <p className="flex justify-center font-bold mb-2">Ulasan</p>
        <p className="text-sm">Belum ada ulasan</p>
      </div>

      <div className="flex flex-col justify-center text-center font-bold mx-28 mb-4 mt-12 border-t pt-6">
        <p>Produk Terkait</p>

        <div className="flex flex-row justify-center gap-6 mt-4">
          {data.data.map((product) => (
            <Link to={`/product/aerostreet/${product.id}`}>
              <div
                key={product.id}
                className="w-full max-w-[142px] h-full  bg-gray-50 border border-gray-300 rounded-lg shadow hover:scale-[1.01] duration-300"
              >
                {/* Product image */}
                <div className="flex w-[140px] h-[140px] bg-white object-contain justify-center items-center rounded-t-lg">
                  <img
                    src={`http://localhost:1337${product.attributes.img.data[0].attributes.url}`}
                    alt="product-image"
                    className="rounded-t-lg"
                  />
                </div>
                <div className="flex flex-col h-full max-h-[102px] justify-between">
                  <div className="px-2 py-2 rounded-b-md">
                    {/* Product Title */}
                    <h5 className="text-[10px] font-normal tracking-tight text-black">
                      {product.attributes.title.substr(0, 40) +
                        (product.attributes.title.length > 40 ? "..." : "")}
                    </h5>

                    {/* Product price */}
                    <div className="flex items-center justify-between mt-[2px]">
                      <span className="text-[12px] font-bold text-black">
                        Rp{product.attributes.price.toLocaleString("id-ID")}
                      </span>
                    </div>
                  </div>

                  {/* Rating & Sales */}
                  <div className="flex px-2 pb-2 justify-between mt-2.5">
                    {/* Rating */}
                    <div className="flex items-center space-x-1">
                      <MdStar className="text-primary" />
                      <span className="text-gray-500 text-xs font-semibold rounded">
                        {product.attributes.rating}
                      </span>
                    </div>

                    {/* Sales */}
                    <div>
                      <p className="text-xs text-primary font-medium">
                        <span>
                          {product.attributes.totalSales >= 1000
                            ? product.attributes.totalSales
                            : product.attributes.totalSales}
                        </span>{" "}
                        terjual
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default SearchDetails;
