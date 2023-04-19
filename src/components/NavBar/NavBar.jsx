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
console.log("CARTTTT",cart);
  return (
    <nav className="text-center">
      <Link className="hover:bg-pink-300" to="/">Home</Link>
      &nbsp; | &nbsp;
      <Link className="hover:bg-pink-300" to="/products">All Products</Link>
      &nbsp; | &nbsp; 
      <Link className="hover:bg-pink-300" to="/orders">All Orders</Link>
      &nbsp; | &nbsp;
      Welcome, {user.name}!
      &nbsp; | &nbsp;
      <Link className="hover:bg-pink-300" to='' onClick={handleLogOut}>Log Out</Link>
      &nbsp; | &nbsp;
      <Link className="hover:bg-pink-300" to="/cart">Cart ({cart.totalQty})</Link>
    </nav>
  )
}

