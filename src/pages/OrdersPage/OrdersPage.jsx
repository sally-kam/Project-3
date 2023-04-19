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
    <main>
      
      <div className="text-left">
        
        {orders.length > 0 ? (
          <div className="text-left grid grid-cols-3 gap-3">
            <div className="col-start-1 col-end-2">
            <OrderList
              orders={orders}
              selectedOrder={selectedOrder}
              setSelectedOrder={setSelectedOrder}
            />
          </div>
      <div className=" col-span-2">
        {selectedOrder ? (
          
          <OrderDetail order={selectedOrder} />
        ) : (
          <p>Select an order to view its details</p>
        )}
      </div>

          </div>
        ) : (
          <p className="text-xl font-bold text-center">No orders yet</p>
        )}
      </div>

    </main>
  );
}