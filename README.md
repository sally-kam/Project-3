<div align="center">

<img src="https://i.imgur.com/jZsvges.gif" /></a>

### Built by: **[Sally Kam](https://www.linkedin.com/in/sallykam/)**

### Description:
##### Welcome to Canvas MarketPlace! This is an E-Commerce MERN-Stack web application where you can find an extensive collection of cool canvas pieces to add a touch of personality to any room. Whether you're looking for artwork to brighten up your home, office, or any other space, we've got you covered. Our canvas pieces range from minimalist designs to bold and colorful prints that can transform any dull wall into a focal point. We offer a variety of art to suit your needs, and our user-friendly website makes it easy to browse and purchase your favorite pieces from the comfort of your own home. Shop with us today and add some artistic flair to your space!

---

#### Technologies Used: 
 [![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/Naereen/StrapDown.js/graphs/commit-activity)

![JS badge](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![Heroku badge](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white)
![Node.js badge](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Tailwind badge](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![MongoDB badge](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Express.js badge](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![React badge](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)

---

### Getting Started

#### [Live Website](https://canvas-ecommerce.herokuapp.com/)

[Trello](https://trello.com/invite/b/kmqRsXVv/ATTIf541b67253dd62fac77dd29e2026211b92466046/project-3-board)

[Wireframe](https://whimsical.com/project-3-wireframe-7AmLzo7tg6oid7shsJ7A33)

[ERD](https://lucid.app/lucidchart/e24e6d5f-0bfc-4cee-8e6a-c0acc478b02f/edit?viewport_loc=36%2C3%2C1341%2C821%2C0_0&invitationId=inv_60a402e4-222b-4946-8f42-d3194f0337cf)

#### Authorization Page:
<img src="https://i.imgur.com/NldgU9v.png" /></a>

#### Home Page
<img src="https://i.imgur.com/mwTLaap.png" /></a>


#### All Products Page
<img src="https://i.imgur.com/8uM9Pu1.png" /></a>

#### My Orders Page
<img src="https://i.imgur.com/VjFEe0l.png" /></a>

#### Cart Page
<img src="https://i.imgur.com/Mz6WaL5.png" /></a>

</div>
---

## The Code Behind The Program:
There are multiple sections that have set this website up but my favorite code was the all products page.
```
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
```

---

## Next Steps: 
- Create a form for entering card details and another form for shipping information.
- Add variety of sizes and multiple images to each art piece.


