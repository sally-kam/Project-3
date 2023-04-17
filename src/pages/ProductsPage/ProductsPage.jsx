import { useState, useEffect, useRef } from 'react';
import * as productsAPI from '../../utilities/products-api';
import * as ordersAPI from '../../utilities/orders-api';
import './ProductsPage.css';
import { Link, useNavigate } from 'react-router-dom';
import SingleProduct from '../../components/SingleProduct/SingleProduct';
import "./ProductsPage.css"

export default function ProductsPage({products}) {
  // If your state will ultimately be an array, ALWAYS
  // initialize to an empty array
// const [error, setError] = useState(null);

  /*-- Event Handlers --*/

  return (
    <main className="ProductsPage">
      <h1>All Products Page</h1>
      <div className="Products">
    {products.map((product, idx) => 
    <SingleProduct key={idx} product={product} />)}
    </div>
    </main>
  );
}