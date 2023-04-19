import React from 'react'
import LineProduct from '../LineProduct/LineProduct';

export default function OrderDetail({order, handleChangeQty, handleCheckout}) {
    if (!order) return null;

    const lineProducts = order.lineProducts.map(item =>
      <LineProduct
        lineItem={item}
        isPaid={order.isPaid}
        handleChangeQty={handleChangeQty}
        key={item._id}
      />
    );
    return (
        <>
    <div className="section-heading">
      <div>
        {order.isPaid ?
          <span>Order Id: {order.orderId}</span>
          :
          <span>No Orders Yet.</span>
        }
        <span>{new Date(order.updatedAt).toLocaleString()}</span>
      </div>


      
      </div>
    </>
  )
}
