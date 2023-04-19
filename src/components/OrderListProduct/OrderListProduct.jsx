import React from 'react'

export default function OrderListProduct({ order, isSelected, setSelectedOrder }) {
  return (
    <div className="outline-double hover:scale-105">
    <span
    className= {`OrderListProduct${isSelected ? ' selected' : ''}`}
    onClick={() => setSelectedOrder(order)}
  >
    <span className="align-rt">
      <span>Order Id:<span className="smaller">{order.orderId}</span></span>
      <span className="smaller">{new Date(order.createdAt).toLocaleDateString()}</span>
    </span>
    <span className="align-rt">
      <span>Total: ${order.orderTotal.toFixed(2)}</span>
      <span className="smaller">{order.totalQty} Product{order.totalQty > 1 && 's'}</span>
    </span>
  </span>
  </div>
  )
}
