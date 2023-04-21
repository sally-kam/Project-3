import React from 'react'
import "./HomePage.css"
import { Link } from 'react-router-dom'
export default function HomePage() {
  return (
    <>
    <div className="text-3xl text-center">Welcome to
    <div class=" text-5xl text-transparent bg-clip-text bg-gradient-to-r to-red-900 from-red-300"> Canvas MarketPlace</div>
    </div>
  <div className="text-center">
    <img className="text-center object-center h-50 w-60"src="https://i.imgur.com/NklP0nn.png"></img>
  </div>
    <div className="text-xl text-center">
    <Link className="outline text-center hover:scale-105" to="/products">View All Products</Link>
    </div>
    </>
  )
}
