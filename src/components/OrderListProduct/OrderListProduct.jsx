import React from 'react'

export default function OrderListProduct({ order, isSelected, setSelectedOrder }) {
  return (
    <div className="bg-white ">
    <div
    className= {`OrderListProduct${isSelected ? 'selected active bg-sky-700 hover:bg-sky-700' : 'bg-white hover:bg-pink-300'}`}
    onClick={() => setSelectedOrder(order)}
  >
    <div className="grid grid-cols-2 gap-3">
    <div>
      <div>Order Id: {order.orderId}</div>
      <div className="smaller">{new Date(order.createdAt).toLocaleDateString()}</div>
    </div>
    <div className="text-right">
      <div>{order.totalQty} Product{order.totalQty > 1 && 's'}</div>
      <div>Total: ${order.orderTotal.toFixed(2)}</div>
    </div>
    </div>
  </div>
  </div>
  )
}
