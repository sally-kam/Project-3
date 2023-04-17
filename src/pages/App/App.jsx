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
import { products } from '../../data';
export default function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="background-color: rgb(192 132 252);"
    >
      { user ?
        <>
          <NavBar user={user} setUser={setUser}/>
          <Routes>
            {/* client-side route that renders the component instance if the path matches the url in the address bar */}
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage products={products} />} />
            <Route path="/products/:productName" element={<ProductDetailPage products={products}/>} />
            <Route path="/orders" element={<OrdersPage user={user} setUser={setUser} />} />
            <Route path="/cart" element={<CartPage user={user} setUser={setUser} />} />
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
