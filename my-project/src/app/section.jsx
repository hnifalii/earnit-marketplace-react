import { useState, useEffect } from "react";
import React from "react";
import { Link } from "react-router-dom";

// Icons
import { MdStar } from "react-icons/md";
import { IoMdArrowDropright } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

// Data
import productData from "../data/content";
import useFetch from "../hooks/useFetch";

export default function Product(props) {

  const { loading, error, data } = useFetch(
    "http://localhost:1337/api/sections?populate=*"
  );

  if (loading) return <p>Section Loading...</p>;
  if (error) return <p>Section Error!</p>;

  console.log(data)
  return (
    <>
      {/* Promo section */}
      <div className="container bg-primary rounded-lg bg-opacity-60 max-w-[1000px] px-10 py-4 mt-4 items-center overflow-hidden">
        <div className="flex justify-between">
          {/* Left container */}
          <div className="flex flex-col justify-between w-full max-w-[300px] my-4">
            {/* Title */}
            <div className="grid gap-2 w-full max-w-[200px]">
            <h1 className="text-2xl font-bold text-black text-opacity-80">
              Produk yang Sedang Trending
            </h1>
            {/* Subtitile */}
            <h4 className="font-medium">
              Cek produk-produk yang sedang tren!
            </h4>
            </div>
            <Link to="/trending">
              <div className="flex font-semibold items-center align-text-bottom">
                <h6>Lihat semua</h6>
                <IoIosArrowForward className="ml-[2px] mt-0.5" />
              </div>
            </Link>
          </div>

          {/* Product cards */}
          <div className="flex gap-4">
            {data.data.map((product) => (
              <div className="block overflow-hidden">
                {/* Product card */}
                <Link to={`/trending/details/${product.id}`}>
                  <div
                    key={product.id}
                    className="w-full max-w-[142px] h-full  bg-gray-100 border border-gray-300 rounded-lg shadow hover:scale-[1.01] duration-300"
                  >
                    {/* Product image */}
                    <div className="flex w-[140px] h-[140px] bg-white object-contain justify-center items-center rounded-t-lg">
                      <img src={`http://localhost:1337${product.attributes.img.data[0].attributes.url}`} alt="product-image" className="rounded-t-lg" />
                    </div>
                    <div className="flex flex-col h-full max-h-[102px] justify-between">
                      <div className="px-2 py-2 rounded-b-md">
                        {/* Product Title */}
                        <h5 className="text-[10px] font-normal tracking-tight text-black">
                          {product.attributes.title.substr(0, 40) + (product.attributes.title.length > 40 ? '...' : '')}
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
                            <span>{product.attributes.totalSales >= 1000 ? product.attributes.totalSales : product.attributes.totalSales}</span> terjual
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
