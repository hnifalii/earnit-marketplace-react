import React, { useState } from "react";
import { Link } from "react-router-dom";

// Data
import productData from "../data/content";

// Icons
import { MdStar } from "react-icons/md";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { IoCartOutline, IoCartSharp } from "react-icons/io5";

// Assets
import image1 from "../assets/images/aerostreet1.jpg";

// Hooks
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

function ProductDetails() {

  const [cart, setCart] = useState(false);
  const [wishlist, setWishlist] = useState(false);
  const { id } = useParams()
  
  const { loading, error, data } = useFetch(
    "http://localhost:1337/api/products?populate=*"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  console.log(data);

  return (
    <>
      <div className="flex justify-center flex-wrap flex-row gap-72 pt-6 px-28">
        {/* Image Preview */}
        <div className="flex flex-wrap flex-row">
          {/* Image Slider */}
          <div className="flex flex-col gap-[10px]">
            <Link to="#">
              <div className="flex w-20 h-20 border object-contain items-center rounded-md outline outline-1 outline-primary shadow-md">
                <img src={`http://localhost:1337${data.data[id-2].attributes.img.data[0].attributes.url}`} alt="preview-img" className="" />
              </div>
            </Link>
            <Link to="#">
              <div className="flex w-20 h-20 border object-contain items-center rounded-md">
                <img src={`http://localhost:1337${data.data[id-2].attributes.img.data[1].attributes.url}`} alt="preview-img" className="" />
              </div>
            </Link>
            <Link to="#">
              <div className="flex w-20 h-20 border object-contain items-center rounded-md">
                <img src={`http://localhost:1337${data.data[id-2].attributes.img.data[2].attributes.url}`} alt="preview-img" className="" />
              </div>
            </Link>
            <Link to="#">
              <div className="flex w-20 h-20 border object-contain items-center rounded-md">
                <img src={`http://localhost:1337${data.data[id-2].attributes.img.data[3].attributes.url}`} alt="preview-img" className="" />
              </div>
            </Link>
          </div>

          {/* Image of Product */}
          <div className="flex mx-4 bg-gray-100 w-[380px] h-[350px] border rounded-md object-contain items-center">
            <img src={`http://localhost:1337${data.data[id-2].attributes.img.data[0].attributes.url}`} alt="product-img" />
          </div>

          {/* Product Details */}
          <div className="grid max-w-[545px] gap-8">
            {/* Product Header */}
            <div className="flex flex-col gap-1">
              <h1 className="text-xl font-semibold">
                {data.data[id-2].attributes.title}
              </h1>

              <div className="flex flex-row items-center gap-2">
                <h4 className="flex items-center gap-1 text-primary">
                  <MdStar size={20} />
                  <span className="text-gray-500 text-sm">{data.data[id-2].attributes.rating}</span>
                </h4>

                <div className="w-0.5 h-0.5 rounded-full bg-gray-400" />

                <h4 className="text-gray-500 text-sm">
                  <span className="font-medium">{data.data[id-2].attributes.totalReview}</span> ulasan
                </h4>

                <div className="w-0.5 h-4 bg-gray-400" />

                <h4 className="text-gray-500 text-sm">
                  <span className="font-medium">{data.data[id-2].attributes.totalSales}</span> terjual
                </h4>
              </div>
              <h2 className="text-primary font-bold text-2xl mt-1">
                Rp{data.data[id-2].attributes.price.toLocaleString("id-ID")}
              </h2>
            </div>

            <div className="flex py-6">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
                voluptas omnis. Modi necessitatibus exercitationem est!
              </p>
            </div>

            <div className="flex flex-wrap flex-row justify-between items-end">
              <Link to="/buy" className="">
                <button
                  id="buyNow"
                  className="flex bg-primary rounded-md px-44 py-2 font-medium text-center text-white"
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
      <div className="px-72 mt-10">
        <p className="flex justify-center font-bold pb-6">Description</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quos
          voluptas suscipit tempora consequuntur, excepturi laborum ad
          recusandae enim maiores?
        </p>
      </div>

      {/* Reveiw of Product */}
      <div>
        <p className="flex justify-center font-bold pb-6">Reviews</p>
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

export default ProductDetails;
