import { useEffect, useState } from 'react';
import { useAuthStore } from '../store/Auth.store';

function Login() {
  const { loginAccount, user,currentAccount } = useAuthStore();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  useEffect(()=>{
    autoLogin()
  },[])
  if (user) {
    return <></>; // or <Navigate to="/dashboard" />;
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    try {
      await loginAccount(email, password);
      setSuccess('Login successful!');
    } catch (err) {
      setError('Login failed. Please check your credentials.');
    }
  };
 async function  autoLogin(){
   await currentAccount()
 } 
  
 
  return (
    <div className="max-w-md mx-auto p-4 bg-gray-800 text-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 block bg-black w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mt-1 block w-full border bg-black border-gray-300 rounded-md shadow-sm p-2 focus:ring focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition duration-200"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
