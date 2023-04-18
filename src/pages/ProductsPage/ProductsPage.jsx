import { useState, useEffect, useRef } from 'react';
import * as productsAPI from '../../utilities/products-api';
import './ProductsPage.css';
import { Link, useNavigate } from 'react-router-dom';
import SingleProduct from '../../components/SingleProduct/SingleProduct';
import "./ProductsPage.css"
import CategoryList from '../../components/CategoryList/CategoryList';

export default function ProductsPage() {
  // If your state will ultimately be an array, ALWAYS
  // initialize to an empty array
// const [error, setError] = useState(null);
const [products, setProducts] = useState([]);
const [activeCat, setActiveCat] = useState('');
const categoriesRef = useRef([]);

  /*-- Event Handlers --*/
  useEffect(function() {
    async function getProducts() {
      const products = await productsAPI.getAll();
      categoriesRef.current = [...new Set(products.map(product => product.category.name))];
      setProducts(products);
      setActiveCat(categoriesRef.current[0]);
    }
    getProducts();
  }, []);

  return (
    <main className="ProductsPage">
      <h1>All Products Page</h1>

      <CategoryList
          categories={categoriesRef.current}
          activeCat={activeCat}
          setActiveCat={setActiveCat}
        />

      <div className="Products">
    {products.map((product, idx) => 
    <SingleProduct key={idx} product={product} />)}
    
    </div>
    </main>
  );
}