import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import * as ordersAPI from '../../utilities/orders-api';



export default function ProductDetailPage({product, setCart}) {
    const {id} = useParams();
    console.log(id)
    console.log("this is", product)


    async function handleAddToOrder(productId) {
        const cart = await ordersAPI.addProductToCart(productId);
        setCart(cart);
      }
    return (
      <div className="text-center grid grid-cols-2 gap-3">
        <img className="outline object-scale-down h-46 w-96 justify-self-center bg-white " src={product.image}></img>
      <div className="text-center">
        <div className="text-2xl font-bold m-5">{product.name}</div>
        <div className="text-left">Description: {product.description}</div>
        <div className="text-left">Price: $ {product.price}</div>
        <button className="outline bg-white hover:scale-105"
        onClick={() => handleAddToOrder(product._id)}
        > Add To Cart </button>
       </div>
      </div>
    )
}
