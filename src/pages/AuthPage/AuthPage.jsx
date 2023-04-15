import React, { useState } from 'react'
import SignUpForm from '../../components/SignUpForm/SignUpForm'
import LoginForm from '../../components/LoginForm/LoginForm'

export default function AuthPage({setUser}) {
  const [showLoginForm, setShowLoginForm] = useState(true);
  return (
    <>
      <h1>AuthPage</h1>
            <button 
      onClick={() => setShowLoginForm(!showLoginForm)}>
        {showLoginForm ? "Log In" : "Sign Up"}
      </button>
      <div>
      { showLoginForm ? (
        <SignUpForm setUser={setUser}/>
      ) : (
        <LoginForm setUser={setUser}/>
      )}
</div>
    </>
  )
}
