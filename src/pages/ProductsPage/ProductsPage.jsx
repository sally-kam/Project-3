import { useState, useEffect, useRef } from 'react';
import * as productsAPI from '../../utilities/products-api';
import './ProductsPage.css';
import SingleProduct from '../../components/SingleProduct/SingleProduct';
import "./ProductsPage.css"

export default function ProductsPage({setProduct}) {
  // If your state will ultimately be an array, ALWAYS
  // initialize to an empty array
// const [error, setError] = useState(null);
const [products, setProducts] = useState([]);
const [categories, setCategories] = useState([]);
const [filterProducts, setFilterProducts] = useState([]);
const [activeCat, setActiveCat] = useState('');
const [showAll, setShowAll] = useState(false);



  /*-- Event Handlers --*/
  useEffect(function() {
    async function getProducts() {
      const products = await productsAPI.getAll();
      const categories = [...new Set(products.map(product => product.category.name))];
      setProducts(products);
      setCategories(categories);
      setActiveCat(categories[0]);
      setFilterProducts(products);
    }
    getProducts();
  }, []);

  function handleCategoryClick(cat) {
    const filters = cat === "" ? products : products.filter(
      (product) => product.category.name === cat
    );
    setFilterProducts(filters);
    setActiveCat(cat);
    setShowAll(false);

  }
  function handleShowAll() {
    setShowAll(true);
    setActiveCat('');
  }


  return (
    <>
          <div className="text-center ">All Products Page </div>
    <main className="grid grid-cols-5 gap-3 p-2">
    <div className="  col-span-1">

    <aside className="text-center bg-red-300">Categories:</aside>
    <div className={showAll ? 'active text-center text-white bg-red-400 hover:text-white' : ' text-center bg-red-300 hover:bg-white'}
      onClick={handleShowAll}>Show All</div>
      {categories.map((cat, i) =>
    <div
      key={i}
      className={cat === activeCat ? 'active text-center text-white bg-red-400 hover:text-white' : ' text-center bg-red-300 hover:bg-white'}
      onClick={()=> handleCategoryClick(cat)}
      >
      {cat}
    </div>
  )}
    </div>

    <div className="grid grid-cols-3 gap-9 col-span-4">
  {activeCat ? filterProducts.map((product) => 
    <SingleProduct key={product._id} product={product} products={products} setProduct={setProduct}/>)
    :
    products.map((product) => 
    <SingleProduct key={product._id} product={product} products={products} setProduct={setProduct}/>)
  }
</div>

    </main>
    </>
  );
}