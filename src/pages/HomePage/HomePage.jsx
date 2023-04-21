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
    <div className="text-xl text-center">
    <Link className="outline text-center hover:outline-double" to="/products">View All Products</Link>
    </div>
    </>
  )
}
