import { useState } from "react";
import { motion } from "framer-motion";
import { Link , useNavigate} from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
   const navigate = useNavigate();

//   update later when backend is ready
 const handleLogin = (e) => {
    e.preventDefault();

    //  Fake login (no backend)
    localStorage.setItem("token", "dummy_token");

    // redirect to dashboard
    navigate("/");
  };




  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-emerald-50 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-white/70 backdrop-blur-xl shadow-xl rounded-2xl p-8 border border-green-100"
      >
        {/* Logo / Heading */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-semibold text-emerald-700">Medify</h1>
          <p className="text-gray-500 mt-2 text-sm">
            Calm your mind. Start your journey 🌿
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-300 bg-white/80"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-300 bg-white/80"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-600">
              <input type="checkbox" className="accent-emerald-500" />
              Remember me
            </label>
            <a href="#" className="text-emerald-600 hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-emerald-600 text-white font-medium hover:bg-emerald-700 transition"
          >
            Sign In
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="px-3 text-gray-400 text-sm">or</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* Social Login */}
        <div className="space-y-3">
          <button className="w-full py-3 rounded-xl border border-gray-200 hover:bg-gray-50 transition">
            Continue with Google
          </button>
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Don’t have an account?{' '}
          <Link 
          to={'/auth/register'}
          className="text-emerald-600 cursor-pointer hover:underline">
            Sign up
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
