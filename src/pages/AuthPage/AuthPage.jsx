import { useState } from 'react';
import './AuthPage.css';
import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <>
    <h1>Welcome to Creative Commerce</h1>
    <main className="AuthPage">
      <div>
        <div onClick={() => setShowLogin(!showLogin)}>
          {showLogin ? 
          'SIGN UP' : 
          'LOG IN'}
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