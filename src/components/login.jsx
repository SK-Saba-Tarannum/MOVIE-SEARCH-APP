
import { useState } from "react";
import "../index.css";
import {useNavigate} from "react-router-dom"

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate=useNavigate()

    const dashboardpage=()=>{
        navigate("/")
        
    }
  
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form from refreshing the page

    if (!email || !password) {
      setError("Please fill in both fields.");
      return;
    }
    setError("");
    // onClick={()=>{dashboardpage()}}
    dashboardpage()     
    console.log("Logging in with:", { email, password });
  };

  return (
    <div className="flex login h-full w-full justify-center items-center">
      <div className="flex flex-col bg-gray-700 p-10 rounded-md w-80 ">
        <h1 className="text-center mb-4 text-2xl font-bold text-white ">Login Form</h1>

        {error && <div className="text-red-500 text-center mb-4">{error}</div>}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Enter your e-mail..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-2 rounded border border-gray-300"
            required
          />
          <input
            type="password"
            placeholder="Enter your password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-4 py-2 rounded border border-gray-300"
            required
          />
          <input
            type="submit"
            value="Login"
            className="bg-slate-300 text-black rounded py-2 loginlogo"
            // onClick={()=>{dashboardpage()}}
          />
        </form>
      </div>
    </div>
  );
}

export default Login;

