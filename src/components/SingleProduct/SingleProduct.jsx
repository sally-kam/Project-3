import React from 'react'
import { Link } from 'react-router-dom'
import "./SingleProduct.css"

export default function SingleProduct({product}) {
  return (
    <div className="bg-white hover:scale-105">
    <Link className="bg-white" to={`${product._id}`}>
    <img className="bg-white" src={product.image}></img>
    <h2 className="bg-white">{product.name}</h2>
    <h1 className="bg-white">${product.price}</h1>
    </Link>
    </div>
  )
}
