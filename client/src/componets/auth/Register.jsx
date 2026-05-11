import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {

      const response = await axios.post(
        `${API_BASE_URL}/user/register`,
        {
          fullName: name,
          email: email,
          password: password,
        }
      );

      localStorage.setItem("token", response.data.token);
      alert("Registration successful");
      navigate("/onboarding");

    } catch (error) {
      console.log(error);
      if (error.response?.data) {
        alert(error.response.data);
      } else {
        alert("Registration failed");
      }
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = `${API_BASE_URL}/oauth2/authorization/google`
  }


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-emerald-50 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-white/70 backdrop-blur-xl shadow-xl rounded-2xl p-8 border border-green-100"
      >
        {/* Heading */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-semibold text-emerald-700">Medify</h1>
          <p className="text-gray-500 mt-2 text-sm">
            Begin your peaceful journey 🌿
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleRegister} className="space-y-5">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-300 bg-white/80"
            />
          </div>

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
              placeholder="Create a password"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-300 bg-white/80"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-300 bg-white/80"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-emerald-600 text-white font-medium hover:bg-emerald-700 transition"
          >
            Create Account
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="px-3 text-gray-400 text-sm">or</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* Social Signup */}
        <div className="space-y-3">
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full py-3 rounded-full border border-gray-300
                           flex items-center justify-center gap-2
                           hover:bg-gray-50 transition"
          >
            <img
              src="https://developers.google.com/identity/images/g-logo.png"
              alt="google"
              className="w-5 h-5"
            />
            Continue with Google
          </button>

        </div>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{' '}
          <Link to="/auth/login" className="text-emerald-600 cursor-pointer hover:underline">
            Sign in
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
