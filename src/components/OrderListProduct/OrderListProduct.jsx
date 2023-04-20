import React from 'react'

export default function OrderListProduct({ order, isSelected, setSelectedOrder, handleDeleteOrder }) {
  return (
    <div className="bg-white hover:bg-red-300">
    <div
    className= {`OrderListProduct${isSelected ? 'selected active bg-red-400 hover:bg-red-400' : 'bg-white hover:bg-red-300'}`}
    onClick={() => setSelectedOrder(order)}
  >
    <div className="grid grid-cols-2 gap-3 hover:outline-double outline-">
    <div>
    <div>Order Id: </div>
      <div>{order.orderId}</div>
      <div className="smaller">{new Date(order.createdAt).toLocaleDateString()}</div>
    </div>
    <div className="text-right">
    <button onClick={() => handleDeleteOrder(order.orderId)}>✖️</button>
      <div>{order.totalQty} Product{order.totalQty > 1 && 's'}</div>
      <div>Total: ${order.orderTotal.toFixed(2)}</div>
    </div>
    </div>
  </div>
  </div>
  )
}
