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
const [categories, setCategories] = useState([]);
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
    <>
          <h1>All Products Page</h1>
    <main className="grid grid-cols-5 gap-3">

    <div className=" col-span-1">
      {categories.map((cat, i) =>
    <li
      key={i}
      className={cat === activeCat ? 'active' : ''}
      onClick={()=> {const filters = products.filter(
        (product) => product.category === cat
      );
      setFilterProducts(filters);
      setCatPath(categories[i]);}}
    >
      {cat}
    </li>
  )};
    </div>

      <div className="grid grid-cols-3 gap-9 col-span-4">
    {products.map((product) => 
    <SingleProduct key={product._id} product={product} products={products}/>)}
    
    </div>
    </main>
    </>
  );
}