import React from 'react'

export default function LineProduct({lineProduct, isPaid, handleChangeQty}) {

    console.log(lineProduct)
  return (
    <div className="outline grid grid-cols-2 gap-3">
      
        <img className="object-scale-down h-48 w-96" src={lineProduct.product.image}></img> 
        <div className="text-right">
        <div className="align-ctr">{lineProduct.product.name}</div>
       
        <div>Price: ${lineProduct.product.price.toFixed(2)}</div>
      <div>
      <div className="qty" style={{ justifyContent: isPaid && 'center' }}>
        {!isPaid &&
          <button
            className="hover:scale-125"
            onClick={() => handleChangeQty(lineProduct.product._id, lineProduct.qty - 1)}
          >➖</button>
        }
        <span>Qty: {lineProduct.qty}</span>
        {!isPaid &&
          <button
            className="hover:scale-125"
            onClick={() => handleChangeQty(lineProduct.product._id, lineProduct.qty + 1)}
          > ➕ </button>
        }
      </div>
      </div>
      <div className="ext-price">Total: ${lineProduct.extPrice.toFixed(2)}</div>
      </div>
  </div>
  )
}