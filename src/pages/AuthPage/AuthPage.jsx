import { useState } from 'react';
import './AuthPage.css';
import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <>
    <div className="text-3xl text-center">Welcome to
    <div className=" text-5xl text-transparent bg-clip-text bg-gradient-to-r to-red-900 from-red-300"> Canvas MarketPlace</div>
    </div>
  <div className="text-center">
    <img className="text-center object-center h-30 w-20"src="https://i.imgur.com/NklP0nn.png"></img>
  </div>
    <main className="AuthPage">
      <div>
        <div className="underline text-center hover:text-red-500"onClick={() => setShowLogin(!showLogin)}>
          {showLogin ? 
          'First time here? Create an account' : 
          'Welcome back! Please sign in'}
          </div>
      </div>
      <div>
      {showLogin ? 
      <LoginForm setUser={setUser} /> : 
      <SignUpForm setUser={setUser} />}
      </div>
    </main>
    </>
  );
}