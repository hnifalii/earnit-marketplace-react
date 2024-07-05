import React from 'react'
import { Link } from 'react-router-dom';

// Icons
import { FaRegCheckCircle } from "react-icons/fa";

function Buy() {
  return (
    <>
    <div className='flex flex-col w-screen justify-center align-center items-center text-center h-screen max-h-[420px]'>
      <FaRegCheckCircle size={40} className='text-primary'/>
      <h1 className='text-xl font-medium mt-2'>Terimakasih</h1>
      <h6 className='text-md'>Pesanan anda akan segera diproses.</h6>
      <Link to="/">
      <h6 className='text-sm text-primary mt-4'>Kembali ke halaman utama.</h6>
      </Link>
    </div>
    </>
  )
}

export default Buy