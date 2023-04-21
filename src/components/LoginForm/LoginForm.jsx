import { useState } from 'react';
import * as usersService from '../../utilities/users-service';
import "./LoginForm.css"

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method 
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <div className=" justify-center items-center w-full max-w-xs">
      <div className=" justify-center items-center form-container p-3">
        <form className="justify-center bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" autoComplete="off" onSubmit={handleSubmit}>

        <div className="text-left bg-white relative z-0 w-full mb-6 group">
      <input type="text" name="email" value={credentials.email} onChange={handleChange} className="text-left bg-white block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-red-900 appearance-none dark:text-white dark:border-gray-900 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer" placeholder=" " required />
      <label className="text-left bg-white peer-focus:font-medium absolute text-sm  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-400 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email Address</label>
      </div>

      <div className="text-left bg-white relative z-0 w-full mb-6 group">
      <input type="password" name="password" value={credentials.password} onChange={handleChange} className="text-left bg-white block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-red-900 appearance-none dark:text-white dark:border-gray-900 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer" placeholder=" " required />
      <label className="text-left bg-white peer-focus:font-medium absolute text-sm  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-400 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
      </div>

          <div className=" text-center bg-white p-2">
          <button className="bg-white inline-block align-baseline hover:text-red-500" type="submit">LOG IN</button>
        </div>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}