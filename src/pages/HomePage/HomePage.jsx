import React from 'react'
import "./HomePage.css"
import { Link } from 'react-router-dom'
export default function HomePage() {
  return (
    <>
    <div className="text-3xl text-center">Welcome to
    <div className="animate-text bg-gradient-to-r from-red-500 via-purple-500 to-green-500 bg-clip-text text-transparent text-8xl font-black"> Canvas MarketPlace</div>
    </div>
  <div className="text-center">
    <img className="text-center object-center h-50 w-60"src="https://i.imgur.com/NklP0nn.png"></img>
  </div>
    <div className="p-3 w-full max-w-lg">Welcome to Canvas MarketPlace where you can find an extensive collection of cool canvas pieces to add a touch of personality to any room. Whether you're looking for artwork to brighten up your home, office, or any other space, we've got you covered. Our canvas pieces range from minimalist designs to bold and colorful prints that can transform any dull wall into a focal point. We offer a variety of art to suit your needs, and our user-friendly website makes it easy to browse and purchase your favorite pieces from the comfort of your own home. Shop with us today and add some artistic flair to your space!</div>
    <div className="text-xl text-center">
    <Link className="outline text-center hover:outline-double" to="/products">View All Products</Link>
    </div>
    </>
  )
}
