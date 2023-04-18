import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProductDetailPage() {
    const {productName} = useParams();
    const selectedProduct = products.find((product) => product.name === productName);
    const [cart, setCart] = useState(null);


    async function handleAddToOrder(productId) {
        const cart = await ordersAPI.addProductToCart(productId);
        setCart(cart);
      }
    return (
      <>
      <h1>Product Details</h1>
      <div className="ProductDetails">
        <img className="bg-white" src={selectedProduct.image}></img>
        <h1>{selectedProduct.name}</h1>
        <h2>{selectedProduct.description}</h2>
        <h2>{selectedProduct.price}</h2>
        <button className="outline-double hover:scale-105"
        onClick={() => handleAddToOrder(product._id)}
        > Add To Cart </button>
       </div>
      </>
    )
}
