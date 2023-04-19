import React from 'react'
import OrderListProduct from '../OrderListProduct/OrderListProduct';
export default function OrderList({ orders, selectedOrder, setSelectedOrder }) {
    const orderListProducts = orders.map(o =>
        <OrderListProduct
          order={o}
          isSelected={o === selectedOrder}
          setSelectedOrder={setSelectedOrder}
          key={o._id}
        />
      );
      return (
        <main className="OrderList">
          {orderListProducts}
        </main>
      );
    }