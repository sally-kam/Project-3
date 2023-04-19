import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import * as ordersAPI from '../../utilities/orders-api';



export default function ProductDetailPage({product}) {
    const {id} = useParams();
    console.log(id)
    console.log("this is", product)
    const [cart, setCart] = useState(null);


    async function handleAddToOrder(productId) {
        const cart = await ordersAPI.addProductToCart(productId);
        setCart(cart);
      }
    return (
      <>
      <h1>Product Details</h1>
      <div className="ProductDetails">
        <img className="bg-white" src={product.image}></img>
        <h1>{product.name}</h1>
        <h2>{product.description}</h2>
        <h2>{product.price}</h2>
        <button className="outline-double hover:scale-105"
        onClick={() => handleAddToOrder(product._id)}
        > Add To Cart </button>
       </div>
      </>
    )
}
