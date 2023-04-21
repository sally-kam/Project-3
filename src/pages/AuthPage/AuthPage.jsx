import { useState } from 'react';
import './AuthPage.css';
import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="w-full
    h-screen
    bg-gradient-to-r
    from-red-500
    via-purple-500
    to-green-500
    background-animate">
      <section className="pt-20">
    <div className="text-3xl text-white text-center">Welcome to
    <div className=" text-5xl text-white text-transparent bg-clip-text bg-gradient-to-r to-red-900 from-red-300"> Canvas MarketPlace</div>
    </div>
  <div className="text-center">
    <img className="text-center object-center h-30 w-20"src="https://i.imgur.com/NklP0nn.png"></img>
  </div>
    <div className="AuthPage">
      <div>
      {showLogin ? 
      <LoginForm setUser={setUser} /> : 
      <SignUpForm setUser={setUser} />}
      </div>
        <div className="underline text-center text-white hover:scale-125 w-full max-w-xs"onClick={() => setShowLogin(!showLogin)}>
          {showLogin ? 
          'First time here? Create an account' : 
          'Welcome back! Please sign in'}
          </div>
       
    </div>
    </section>

    </div >
  );
}