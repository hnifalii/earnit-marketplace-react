import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Icons
import { IoIosArrowForward } from "react-icons/io";
import { MdStar } from "react-icons/md";

// Hooks
import useFetch from "../hooks/useFetch";

function Hero() {
  const { loading, error, data } = useFetch(
    "http://localhost:1337/api/products?populate=*"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  console.log(data);

  return (
    <>
      <div className="container px-32 mt-10">
        {/* Products */}
        <div className="grid">
          <div className="flex justify-between font-medium items-center">
            <h2>Produk rekomendasi</h2>
            <Link to="/browse/products">
              <h2 className="flex items-center text-sm text-primary">
                Lihat semua
                <IoIosArrowForward size={12} />
              </h2>
            </Link>
          </div>
          {/* Product cards */}
          <div className="flex gap-4 py-2 overflow-hidden">
            {data.data.map((product) => (
              <Link to={`/details/${product.id}`}>
                <div
                  key={product.id}
                  className="w-full max-w-[142px] h-full bg-gray-50 border border-gray-300 rounded-lg shadow hover:scale-[1.01] duration-300"
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
      </div>
    </>
  );
}

export default Hero;
