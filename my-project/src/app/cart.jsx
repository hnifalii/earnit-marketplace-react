import React, {useState, } from 'react'
import { Link, useParams } from "react-router-dom";


// Data
import productData from "../data/content";
import useFetch from "../hooks/useFetch";

function Cart() {
    const list = [
      {
        id: 1,
        name: 'price',
        price: '$100'
      },
      {
        id: 2,
        name: 'sub-totoal',
        price: '$105'
      },
    ]

    const cart = [
      {
        id: 1,
        img: 'https://via.placeholder.com/130x80',
        productName: 'IPHONE',
        productDescription: 'This Product best seller'
      },
      {
        id: 2,
        img: 'https://via.placeholder.com/130x80',
        productName: 'TV HD 4K',
        productDescription: 'This Product best seller'
      },
      {
        id: 3,
        img: 'https://via.placeholder.com/130x80',
        productName: 'AEROSTREET',
        productDescription: 'This Product best seller'
      }
    ]

  //   const { id } = useParams()

  //   const { loading, error, data } = useFetch(
  //     "http://localhost:1337/api/sections?populate=*"
  //   );

  //   if (loading) return <p>Section Loading...</p>;
  // if (error) return <p>Section Error!</p>;

  return (
    <section className='container'>
        {/* name */}
        <div className="p-5">
        <h1 className='text-2xl font-medium'>Shoping Cart</h1>
        </div>
        <nav className='p-5 flex justify-start'>
          <div>
            <a href="" className='font-medium text-xl'>Product</a>
            {cart.map((data) => (
               <Link to ={`/trending/details/${data.id}`}>
            <div className='flex flex-col py-6 items-center'>
                <div className='flex gap-5'>
                  <img src={data.img} alt="" />
                  <div className='flex-col'>
                    <h2 className='font-semibold text-xl'>{data.productName}</h2>
                    <p className='text-sm max-w-40 pt-2 text-gray-600'>{data.productDescription}</p>
                  </div>
                </div>
            </div>
            </Link>
            ))}
          </div>

            {list.map((data) => (
          <div key={data.id} className='md:px-28 '>
              <a href="" className='text-gray-500'>{data.name}</a>
              {/* price */}
              <p className='text-xl font-medium pt-9 text-gray-600 justify-center flex'>{data.price}</p>    
              </div>
            ))};
            <div>
              <a href="" className='text-gray-500 p-24'>Quantity</a>
            </div>
        </nav>
    </section>
  )
}

export default Cart