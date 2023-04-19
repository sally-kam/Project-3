import React from 'react'
import "./CartPage.css"
import LineProduct from '../../components/LineProduct/LineProduct';
import { useState } from 'react';
import { useEffect } from 'react';
import * as ordersAPI from '../../utilities/orders-api';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import { useNavigate } from 'react-router-dom';

export default function CartPage() {
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
  async function handleAddToOrder(itemId) {
    const cart = await ordersAPI.addProductToCart(itemId);
    setOrder(cart);
  }

  async function handleChangeQty(itemId, newQty) {
    const updatedCart = await ordersAPI.setProductQtyInCart(itemId, newQty);
    setOrder(updatedCart);
  }

  async function handleCheckout() {
    await ordersAPI.checkout();
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
    <div>
      {lineProducts.length ?
        <>
          {lineProducts}
          <section className="total">
            {order.isPaid ?
              <span className="right">TOTAL&nbsp;&nbsp;</span>
              :
              <button
                className="outline-double hover:scale-105"
                onClick={handleCheckout}
                disabled={!lineProducts.length}
              > CHECKOUT </button>
            }
            <span>Total Products: {order.totalQty}</span>
            <span>Total Price: ${order.orderTotal.toFixed(2)}</span>
          </section>
        </>
        :
        <div className="cart">cart is empty</div>
      }
    </div>
  )
}
