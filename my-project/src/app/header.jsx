import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import reactRouterDom from "react-router-dom";
import useFocusOnKeyDown from 'react-focus-onkeydown';

// Hooks
import useFetch from "../hooks/useFetch";

// Icons
import { CiSearch } from "react-icons/ci";
import { IoChatboxEllipses, IoCartSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

// const getFilteredItems = (query, items) => {
//   if (!query) {
//     return items;
//   }
//   return items.filter(products => products.name.includes(query))
// }

function Header() {
  const [nav, setNav] = useState(false);
  const [address, setAddress] = useState(false);

  const refInput = useRef(null);
  useFocusOnKeyDown(refInput);

  // const [query, setQuery] = useState("");

  // const { data } = useFetch(
  //   "http://localhost:1337/api/products?populate=*"
  // );

  // const { items } = data;

  // const filteredItems = getFilteredItems(query, items);

  // console.log(data);

  return (
    <>
      <div className="sticky top-0 z-50 bg-white">
        <div className="flex justify-between py-5 border-b-[1.5px] px-2 md:px-10 align-middle flex-wrap md:flex-nowrap lg:flex-nowrap items-center">
          {/* Logo */}
          <div className="sm:pr-5">
            <Link
              to=""
              className="text-primary sm:text-5xl pb-3 md:pb-0 lg:pb-0 lg:text-[36px] md:text-4xl font-semibold font-sans"
            >
              earnit
            </Link>
          </div>

          {/* Search */}
          <form className="flex justify-end border-[1.5px] rounded-md">
            <label htmlFor="search">
              <CiSearch size={26} className="m-2 text-gray-500 absolute" />
            </label>
            <input
              className="bg-gray-100 outline-0 border-0 max-h-10 w-screen lg:max-w-[840px] md:max-w-[600px] sm:max-w-[650px] md:h-12 lg:h-12 sm:h-10 rounded-md focus:border-0 focus:outline-0 ps-9 flex text-sm"
              type="text"
              placeholder="Cari barang atau layanan....."
              name="search"
              id="search"
              ref={refInput}
              spellCheck="false"
              // onChange={e => setQuery(e.target.value)}
            />
            <Link to="/search" className="absolute">
            <button type="submit" className="bg-primary px-5 py-[10px] rounded-r-md font-medium text-sm text-white hover:bg-sky-500">Cari</button>
            </Link>
          </form>

          {/* Icons */}
          <div className="lg:flex-end justify-between w-40 items-center hidden md:flex">
            <Link to="/cart">
              <IoCartSharp size={34} className="text-gray-400" />
            </Link>
            <Link to="/chat">
              <IoChatboxEllipses size={28} className="text-gray-400" />
            </Link>

            {/* Href ke login page */}
            <Link to="/login">
              <FaUser size={26} className="text-gray-400" />
            </Link>
          </div>
        </div>
        <div className="flex justify-between px-10 items-center border-b-[1.5px] py-1 whitespace-nowrap text-xs tracking-normal">
          {/* Opsi */}
          <div className="flex items-center">
            <button
              type="button"
              className="font-medium text-gray-500"
              onClick={() => setNav(!nav)}
            >
              Semua kategori
            </button>
            <button
              type="button"
              id=""
              className="ml-1 items-center"
              onClick={() => setNav(!nav)}
            >
              {/* Arrow */}
              <div className="text-gray-500">
                {nav ? (
                  <IoIosArrowUp size={12} />
                ) : (
                  <IoIosArrowDown size={12} />
                )}
              </div>
            </button>
            {/* Category popup */}
            {nav && (
              <div className="flex flex-col justify-center text-center py-4 px-[40px] absolute top-[118px] bg-slate-100 left-0 right-0 h-screen max-h-[400px] w-screen shadow-sm border-gray-200 border-x-[1.5px] border-b-[1.5px] z-50">
                <h1 className="text-2xl">hello there</h1>
              </div>
            )}
          </div>

          {/* product category */}
          <div className="lg:flex md:flex hidden justify-between items-center lg:pr-8 md:pr-8 pr-0">
            <div className="flex gap-5">
              <Link to="" className="font-medium text-gray-500">
                Elektronik
              </Link>
              <Link to="" className="font-medium text-gray-500">
                Olahraga
              </Link>
              <Link to="" className="font-medium text-gray-500">
                Pakaian
              </Link>
              <Link to="" className="font-medium text-gray-500">
                Peralatan rumah tangga
              </Link>
            </div>

            <div className="h-5 w-[1.5px] my-1 bg-black self-center opacity-10 mx-4"></div>

            {/* service category */}
            <div className="flex gap-5">
              <Link to="" className="font-medium text-gray-500">
                Software Development
              </Link>
              <Link to="" className="font-medium text-gray-500">
                Copywriting
              </Link>
              <Link to="" className="font-medium text-gray-500">
                Design
              </Link>
              <Link to="" className="font-medium text-gray-500">
                Photo and Video Editing
              </Link>
            </div>
          </div>

          {/* Alamat */}
          <div className="text-gray-500 font-medium flex gap-1 items-center">
            Dikirim ke{" "}
            <button
              type="button"
              id=""
              className="flex items-center"
              onClick={() => setAddress(!address)}
            >
              <span className="text-primary">Rumah</span>
              <div className="ml-[0.5px] text-primary">
                {address ? (
                  <IoIosArrowUp size={12} />
                ) : (
                  <IoIosArrowDown size={12} />
                )}
              </div>
            </button>
            {/* Popup alamat */}
            {address && (
              <div className="right-[40px] w-48 h-10 top-[117px] bg-primary absolute z-50">
                <h1>test</h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
