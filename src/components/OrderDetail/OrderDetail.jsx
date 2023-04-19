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
    <div>OrderDetail</div>
    <div className="line-item-container flex-ctr-ctr flex-col scroll-y">
    {lineProducts.length ?
          <>
            {lineProducts}
            <section className="total">
              {order.isPaid ?
                <span className="right">TOTAL&nbsp;&nbsp;</span>
                :
                <button
                  className="btn-sm"
                  onClick={handleCheckout}
                  disabled={!lineProducts.length}
                >CHECKOUT</button>
              }
              <span>{order.totalQty}</span>
              <span className="right">${order.orderTotal.toFixed(2)}</span>
            </section>
          </>
          :
          <div className="cart">cart is empty</div>
        }
      </div>
    </>
  )
}
