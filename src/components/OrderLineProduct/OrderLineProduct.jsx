import React from 'react'

export default function OrderLineProduct({lineProduct}) {

  return (
    <div className="border-4">
       
      <div className="grid grid-cols-2 gap-3">
        <img className="object-scale-down h-48 w-96" src={lineProduct.product.image}></img> 
        <div>
        <div>{lineProduct.product.name}</div>
        <div>Price: ${lineProduct.product.price.toFixed(2)}</div>
        <div>Qty: {lineProduct.qty}</div>
        <div className="ext-price">Total: ${lineProduct.extPrice.toFixed(2)}</div>
        </div>
      </div>
  </div>
  )
}
