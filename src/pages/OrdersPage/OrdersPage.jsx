import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as ordersAPI from '../../utilities/orders-api';
import './OrdersPage.css'
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import OrderList from '../../components/OrderList/OrderList';

export default function OrdersPage({ user, setUser }) {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(function() {
    async function getOrders() {
      const orders = await ordersAPI.getAllForUser();
      setOrders(orders);
      setSelectedOrder(orders[0]);
    }
    getOrders();
  }, []);

  return (
    <main className="grid grid-cols-2 gap-3">
      <div>
        List of Orders
    <OrderList
        orders={orders}
        selectedOrder={selectedOrder}
        setSelectedOrder={setSelectedOrder}
      />
      </div>
      <div>
        Order Details
      {/* Render the existing OrderDetail component */}
      <OrderDetail order={selectedOrder} />
      </div>
    </main>
  );
}