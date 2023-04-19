import React from 'react'
import "./CartPage.css"
import LineProduct from '../../components/LineProduct/LineProduct';
import { useState } from 'react';
import { useEffect } from 'react';
import * as ordersAPI from '../../utilities/orders-api';
import { useNavigate } from 'react-router-dom';

export default function CartPage({cart, setCart}) {
  // If your state will ultimately be an array, ALWAYS
  // initialize to an empty array
const [order, setOrder] = useState({lineProducts:[]});
const navigate = useNavigate();
useEffect(function() {
  async function getCart() {
    const cart = await ordersAPI.getCart();
    setOrder(cart);
  }
  getCart();
}, []);


  /*-- Event Handlers --*/

  async function handleChangeQty(itemId, newQty) {
    const updatedCart = await ordersAPI.setProductQtyInCart(itemId, newQty);
    setOrder(updatedCart);
    setCart(updatedCart);
  }

  async function handleCheckout() {
    await ordersAPI.checkout();
    setCart({totalQty:0});
    // programatically change client-side routes
    navigate('/orders');
  }
  const lineProducts = order.lineProducts.map(item =>
    <LineProduct
      lineProduct={item}
      isPaid={order.isPaid}
      handleChangeQty={handleChangeQty}
      key={item._id}
    />
  );
  
  return (
    <div className="bg-white">
    <div className="bg-white">
      {lineProducts.length ? (
        <div className="bg-white">
          <div className="bg-white grid grid-cols-2 gap-3">
            {/* LineProducts column */}
            <div className="bg-white">{lineProducts}</div>

            {/* Section column */}
            <section className="col-span-1 text-center">
              <aside>Total Products: {order.totalQty}</aside>
              <aside>Total Price: ${order.orderTotal.toFixed(2)}</aside>
              {order.isPaid ? (
                <aside className="right">TOTAL &nbsp;&nbsp;</aside>
              ) : (
                <button
                  className="bg-white hover:scale-105"
                  onClick={handleCheckout}
                  disabled={!lineProducts.length}
                >
                  
                  CHECKOUT
                </button>
              )}
 
            </section>
          </div>
        </div>
      ) : (
        <div className="cart">cart is empty</div>
      )}
    </div>
  </div>
)}