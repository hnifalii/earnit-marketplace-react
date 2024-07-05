import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function Test2() {
  const { id } = useParams();
  const { loading, error, data } = useFetch(
    "https://localhost:1337/api/products/" + id
  );

  if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error!</p>;

  console.log(data);

  return (
    <>
  {/* <div>{data.attributes.title}</div> */}
    </>
  );
}
