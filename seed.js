require('dotenv').config();
require('./config/database');

// const Category = require('./models/category');
const Product = require('./models/product');

// Pattern:  IIFE
(async function() {

//   await Category.deleteMany({});
//   const categories = await Category.create([
//     {name: 'Bronzer', sortOrder: 10},
//     {name: 'Blush', sortOrder: 20},
//     {name: 'Lip Liner', sortOrder: 30},
//     {name: 'Mascara', sortOrder: 40},
//     {name: 'Eye Shadow', sortOrder: 50},
//     {name: 'Eyeliner', sortOrder: 60},
//     {name: 'Lipstick', sortOrder: 70},
//   ]);

  await Product.deleteMany({});
 const products = await Product.create([
    {name: 'Maybelline', 
        description:'quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione', 
        price: 5.95},
    {name: 'Turkey Sandwich', 
        description:'quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione' , 
        price: 6.95},
    {name: 'Hot Dog', 
        description:'quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione' , 
        price: 3.95},
    {name: 'Crab Plate', 
        description:'quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione' , 
        price: 14.95},
    {name: 'Fried Shrimp', 
        description:'quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione' , 
        price: 13.95},
    {name: 'Whole Lobster', 
        description:'quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione' , 
        price: 25.95},
    {name: 'Taco', 
        description:'quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione' , 
        price: 1.95},
    {name: 'Burrito', 
        description:'quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione' , 
        price: 4.95},
    {name: 'Pizza Slice', 
        description:'quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione' , 
        price: 3.95},
    {name: 'Spaghetti', 
        description:'quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione' , 
        price: 7.95},
    {name: 'Garlic Bread', 
        description:'quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione' , 
        price: 1.95},
    {name: 'French Fries', 
        description:'quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione' , 
        price: 2.95},
    {name: 'Green Salad', 
        description:'quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione' , 
        price: 3.95},
    {name: 'Ice Cream', 
        description:'quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione' , 
        price: 1.95},
    {name: 'Cup Cake', 
        description:'quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione' , 
        price: 0.95},
    {name: 'Custard', 
        description:'quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione' , 
        price: 2.95},
    {name: 'Strawberry Shortcake', 
        description:'quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione' ,
        price: 3.95},
    {name: 'Milk', 
        description:'quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione' , 
        price: 0.95},
    {name: 'Coffee', 
        description:'quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione' ,  
        price: 0.95},
    {name: 'Mai Tai', 
        description:'quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione' , 
        price: 8.95},
    {name: 'Beer', 
        description:'quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione' ,  
        price: 3.95},
    {name: 'Wine', 
        description:'quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione' , 
        price: 7.95},
  ]);

  console.log(products)

  process.exit();

})();