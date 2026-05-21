import { useState } from "react";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Lock, Eye, EyeOff, ShieldCheck, Waves } from "lucide-react";
import toast from "react-hot-toast";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function SetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const [params] = useSearchParams();
  const token = params.get("token");

  let email = "";

  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    email = payload.sub;
  } catch {
    email = "";
  }

  const handleSubmit = async () => {
    setError("");

    if (!password || !confirmPassword) {
      return setError("All fields are required");
    }

    if (password.length < 6) {
      return setError("Password must be at least 6 characters");
    }

    if (password !== confirmPassword) {
      return setError("Passwords do not match");
    }

    try {
      const res = await axios.post(`${API_BASE_URL}/user/setPassword`, {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
       localStorage.setItem("hasCompletedOnboarding", "false");
      navigate("/onboarding");
     
      toast.success("Password set successfully");
    } catch (err) {
      console.log(err.response?.data || err.message);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FFFB] flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute top-[-80px] right-[-80px] w-[280px] h-[280px] bg-[#00BFA6]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-[-90px] left-[-90px] w-[320px] h-[320px] bg-[#71AC61]/10 rounded-full blur-3xl" />

      <div className="w-full max-w-[430px] relative z-10">
        <div className="bg-white border border-[#DFF3EA] rounded-[28px] shadow-[0px_20px_60px_rgba(15,118,90,0.12)] p-8">
          <div className="flex justify-center mb-6">
            <div className="w-[64px] h-[64px] rounded-[18px] bg-[#00BFA6] flex items-center justify-center shadow-[0px_12px_30px_rgba(0,191,166,0.28)]">
              <Waves className="text-white" size={34} />
            </div>
          </div>

          <div className="text-center mb-8">
            <h1 className="text-[30px] font-bold text-[#172033] tracking-tight">
              Create Password
            </h1>
            <p className="text-[#6B7280] mt-2 text-sm">
              Set your password to continue your wellness journey
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-sm font-semibold text-[#243044] mb-2 block">
                Password
              </label>

              <div className="relative">
                <Lock
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B7280]"
                  size={20}
                />

                <input
                  type={show ? "text" : "password"}
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-[#F8FFFB] border border-[#DCEFE7] rounded-2xl py-4 pl-12 pr-12 text-[#172033] placeholder:text-[#9CA3AF] outline-none focus:border-[#00BFA6] focus:ring-4 focus:ring-[#00BFA6]/10 transition"
                />

                <button
                  type="button"
                  onClick={() => setShow(!show)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6B7280] hover:text-[#00BFA6]"
                >
                  {show ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div>
              <label className="text-sm font-semibold text-[#243044] mb-2 block">
                Confirm Password
              </label>

              <div className="relative">
                <ShieldCheck
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B7280]"
                  size={20}
                />

                <input
                  type={show ? "text" : "password"}
                  placeholder="Confirm password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full bg-[#F8FFFB] border border-[#DCEFE7] rounded-2xl py-4 pl-12 pr-4 text-[#172033] placeholder:text-[#9CA3AF] outline-none focus:border-[#00BFA6] focus:ring-4 focus:ring-[#00BFA6]/10 transition"
                />
              </div>
            </div>
          </div>

          {error && (
            <div className="mt-5 bg-red-50 border border-red-100 text-red-500 text-sm rounded-2xl px-4 py-3">
              {error}
            </div>
          )}

          <button
            onClick={handleSubmit}
            className="mt-6 w-full bg-[#00BFA6] hover:bg-[#02AA94] text-white font-bold py-4 rounded-2xl transition-all duration-300 shadow-[0px_14px_30px_rgba(0,191,166,0.24)] hover:translate-y-[-1px]"
          >
            Save Password
          </button>

          <p className="text-center text-[#8A94A6] text-xs mt-6">
            Secure access for your Medify healing platform
          </p>
        </div>
      </div>
    </div>
  );
}