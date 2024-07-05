import React from "react";
import { Link } from "react-router-dom";

// Hooks
import useFetch from "../hooks/useFetch";

// Icons
import { MdStar } from "react-icons/md";

function SearchResult() {
  const { loading, error, data } = useFetch(
    "http://localhost:1337/api/searches?populate=*"
  );

  if (loading) return <p>Search Result Loading...</p>;
  if (error) return <p>Search Result Error!</p>;

  console.log(data);

  return (
    <>
      <div className="container px-36 mt-4 flex">
        {/* Filter */}
        <div className="flex flex-col border border-gray-300 rounded-md text-start">
          {/* Category */}
          <div className="flex flex-col border-b border-gray-300 w-full pl-2 py-2 pr-16">
            <h1 className="text-sm font-bold">Kategori</h1>
            <ul className="flex flex-col gap-1 mt-1 text-gray-500">
              <li>
                <h6 className="text-[10px]">Fashion</h6>
              </li>
              <li>
                <h6 className="text-[10px]">Hobi</h6>
              </li>
              <li>
                <h6 className="text-[10px]">Elektronik</h6>
              </li>
              <li>
                <h6 className="text-[10px]">Olahraga</h6>
              </li>
              <li>
                <h6 className="text-[10px]">Dapur</h6>
              </li>
              <li>
                <h6 className="text-[10px]">Perkakas</h6>
              </li>
              <li>
                <h6 className="text-[10px]"></h6>
              </li>
            </ul>
          </div>
          <div className="flex flex-col border-gray-300 w-full pl-2 py-2 pr-16">
            <h1 className="text-sm font-bold">Harga</h1>
            <input type="number" className="rounded-md w-16 h-5 mt-1 placeholder:text-[10px] align-center" placeholder="Min." />
            <input type="number" className="rounded-md w-16 h-5 mt-2 placeholder:text-[10px] align-center" placeholder="Maks." />
          </div>
        </div>
        <div className="flex gap-4 ml-8">
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

export default SearchResult;
