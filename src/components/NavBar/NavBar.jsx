import React from 'react'
import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import { useNavigate } from 'react-router-dom';
export default function NavBar({user, setUser, setCart}) {
 const navigate = useNavigate();
  function handleLogOut(){
    userService.logOut()
    setUser(null)
    navigate('/')
  }

  return (
    <nav>
      <Link to="/">Home</Link>
      &nbsp; | &nbsp;
      <Link to="/products">All Products</Link>
      &nbsp; | &nbsp; 
      <Link to="/orders">All Orders</Link>
      &nbsp; | &nbsp;
      Welcome, {user.name}!
      &nbsp; | &nbsp;
      <Link to='' onClick={handleLogOut}>Log Out</Link>
      &nbsp; | &nbsp;
      <Link to="/cart">Cart (`${setCart.totalQty}`)</Link>
    </nav>
  )
}

