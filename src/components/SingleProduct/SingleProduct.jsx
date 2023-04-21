import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

export default function SingleProduct({product, setProduct}) {
  const navigate = useNavigate();
  const {id} = useParams();

  
  function handleSingleProduct() {
  setProduct(product);
  navigate(`/products/${product.name}`);
}

  return (
    <div className="outline bg-white hover:scale-105 hover:outline hover:outline-offset-2 hover:outline-red-500">

    <div onClick={handleSingleProduct} className="bg-white">
    <img className=" object-contain bg-white h-48 w-96" src={product.image}></img>
    <div className="bg-white text-center">{product.name}</div>
    <div className="bg-white text-center">${product.price}</div>
    <div className="underline bg-white text-center">View details...</div>
    </div>

    </div>
  )
}
