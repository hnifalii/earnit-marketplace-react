import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <>
      <div className="flex flex-col w-screen h-screen items-center justify-center">
        <h1 className="text-4xl font-bold">404</h1>
        <h4 className="mt-2">Maaf, halaman ini tidak tersedia</h4>
        <Link to="/">
        <h4 className="text-xs text-primary">Kembali ke halaman utama</h4>
        </Link>
      </div>
    </>
  );
}

export default Error;
