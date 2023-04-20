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
    <nav className="text-center bg-red-300">
      <Link className="bg-red-300 hover:bg-white" to="/">Home</Link>
      &nbsp; | &nbsp;
      <Link className="bg-red-300 hover:bg-white" to="/products">All Products</Link>
      &nbsp; | &nbsp; 
      <Link className="bg-red-300 hover:bg-white" to="/orders">My Orders</Link>
      &nbsp; | &nbsp;
      Welcome, {user.name}!
      &nbsp; | &nbsp;
      <Link className="bg-red-300 hover:bg-white" to='' onClick={handleLogOut}>Log Out</Link>
      &nbsp; | &nbsp;
      <Link className="bg-red-300 hover:bg-white" to="/cart">Cart ({cart.totalQty})</Link>
    </nav>
  )
}

