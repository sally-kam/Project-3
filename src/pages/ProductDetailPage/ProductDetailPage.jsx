import React from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../../data';

export default function ProductDetailPage() {
    const {productName} = useParams();
    const selectedProduct = products.find((product) => product.name === productName);
    return (
      <>
      <h1>Product Details</h1>
      <div className="ProductDetails">
        <img className="bg-white" src={selectedProduct.image}></img>
        <h1>{selectedProduct.name}</h1>
        <h2>{selectedProduct.description}</h2>
        <h2>{selectedProduct.price}</h2>
        <button className="outline-double hover:scale-105"> Add To Cart </button>
       </div>
      </>
    )
}
