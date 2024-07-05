import React from 'react'

// Hooks
import useFetch from '../hooks/useFetch';

function Products() {

  const { loading, error, data } = useFetch(
    "http://localhost:1337/api/banners?populate=*"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  console.log(data);

  return (
    <>
        <div>Products</div>
    </>
  )
}

export default Products;