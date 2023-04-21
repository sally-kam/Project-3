import React from 'react'
import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import { useNavigate } from 'react-router-dom';
export default function NavBar({user, setUser, cart}) {
 const navigate = useNavigate();
  function handleLogOut(){
    userService.logOut()
    setUser(null)
    navigate('/')
  }

  return (
    <div className="
    bg-gradient-to-r
    from-red-500
    via-purple-500
    to-green-500
    background-animate">
    <nav className="text-center">
      <Link className=" text-white hover:border" to="/">Home</Link>
      &nbsp; &nbsp; &nbsp; &nbsp;
      <Link className=" text-white hover:border" to="/products">All Products</Link>
      &nbsp; &nbsp; &nbsp; &nbsp;
     <span className="text-white">
         Welcome, {user.name}!
      </span>
  &nbsp; &nbsp; &nbsp; &nbsp;
      <Link className=" text-white hover:border" to="/orders">My Orders</Link> 
      &nbsp; &nbsp; &nbsp; &nbsp;
      <Link className=" text-white hover:border" to='' onClick={handleLogOut}>Log Out</Link>
      &nbsp; &nbsp; &nbsp; &nbsp;
      <Link className="text-white hover:border" to="/cart">Cart ({cart.totalQty})</Link>
    </nav>
    </div>
  )
}

