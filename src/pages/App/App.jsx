import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import "../../tailwind.css"
import NavBar from '../../components/NavBar/NavBar';
import ProductsPage from '../ProductsPage/ProductsPage';
import OrdersPage from '../OrdersPage/OrdersPage';
import CartPage from '../CartPage/CartPage';
import ProductDetailPage from '../ProductDetailPage/ProductDetailPage';
import HomePage from '../HomePage/Homepage';
import { useEffect } from 'react';
import * as ordersAPI from '../../utilities/orders-api';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [product, setProduct] = useState(null)
  const [cart, setCart] = useState({totalQty:0})

    useEffect(() => {
    async function getCart() {
      const cart = await ordersAPI.getCart();
      setCart(cart);
    }
    getCart();
  }, []);

  return (
    <main className="background-color: rgb(192 132 252);"
    >
      { user ?
        <>
          <NavBar user={user} setUser={setUser} setCart={setCart}/>
          <Routes>
            {/* client-side route that renders the component instance if the path matches the url in the address bar */}
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage setProduct={setProduct}/>} />
            <Route path="/products/:id" element={<ProductDetailPage product={product}/>} />
            <Route path="/orders" element={<OrdersPage user={user} setUser={setUser} />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/" element={<OrdersPage user={user} setUser={setUser} />} />
            {/* redirect to /orders/new if path in address bar hasn't matched a <Route> above */}
            <Route path="/*" element={<Navigate to="/products" />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
