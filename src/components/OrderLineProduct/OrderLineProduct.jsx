import React from 'react'

export default function OrderLineProduct({lineProduct}) {

  return (
    <div className="outline p-3">
       
      <div className="grid grid-cols-3 gap-3 ">
        <img className="object-scale-down h-20 w-20" src={lineProduct.product.image}></img> 
        <div className="text-right">
        <div>{lineProduct.product.name}</div>
        <div>Price: ${lineProduct.product.price.toFixed(2)}</div>
        </div>
        <div>
        <div>Qty: {lineProduct.qty}</div>
        <div className="ext-price">Total: ${lineProduct.extPrice.toFixed(2)}</div>
        </div>
        
      </div>
  </div>
  )
}
