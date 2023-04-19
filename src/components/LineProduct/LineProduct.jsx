import React from 'react'

export default function LineProduct({lineProduct, isPaid, handleChangeQty}) {

    console.log(lineProduct)
  return (
    <div className="border-4">
      <div >
        <span className="align-ctr">{lineProduct.product.name}</span>
        <span>{lineProduct.product.price.toFixed(2)}</span>
      </div>
      <div className="qty" style={{ justifyContent: isPaid && 'center' }}>
        {!isPaid &&
          <button
            className="btn-xs"
            onClick={() => handleChangeQty(lineProduct.product._id, lineProduct.qty - 1)}
          >−</button>
        }
        <span>{lineProduct.qty}</span>
        {!isPaid &&
          <button
            className="btn-xs"
            onClick={() => handleChangeQty(lineProduct.product._id, lineProduct.qty + 1)}
          >+</button>
        }
      </div>
      <div className="ext-price">${lineProduct.extPrice.toFixed(2)}</div>
  </div>
  )
}