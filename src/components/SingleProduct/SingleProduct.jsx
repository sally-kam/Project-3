import React from 'react'
import { Link } from 'react-router-dom'
import "./SingleProduct.css"
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

export default function SingleProduct({product, setProduct}) {
  const navigate = useNavigate();
  const {id} = useParams();

  
  function handleSingleProduct() {
  setProduct(product);
  navigate(`/products/${product.name}`);
  console.log(navigate)
}

  return (
    <div className="bg-white hover:scale-105">

    <div onClick={handleSingleProduct} className="bg-white">
    <img className=" object-cover bg-white h-48 w-96" src={product.image}></img>
    <div className="bg-white">{product.name}</div>
    <div className="bg-white">${product.price}</div>
    </div>

    </div>
  )
}
