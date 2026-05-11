import { useState } from "react";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function SetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const [params] = useSearchParams();
  const token = params.get("token");
  const payload = JSON.parse(atob(token.split(".")[1]));
  const email = payload.sub;

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
      navigate("/onboarding");
    } catch (err) {
      console.log(err.response?.data || err.message);
      setError("Something went wrong");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>Create Password 🔐</h2>
        <p style={{ color: "#666" }}>
          Set a password for future manual login
        </p>

        <input
          type={show ? "text" : "password"}
          placeholder="Enter password"
          style={styles.input}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type={show ? "text" : "password"}
          placeholder="Confirm password"
          style={styles.input}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <div style={{ marginBottom: "10px" }}>
          <input
            type="checkbox"
            onChange={() => setShow(!show)}
          /> Show Password
        </div>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button style={styles.button} onClick={handleSubmit}>
          Save Password
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f5f7fa",
  },
  card: {
    padding: "30px",
    borderRadius: "10px",
    background: "#fff",
    boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
    width: "350px",
    textAlign: "center",
  },
  input: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    width: "100%",
    padding: "10px",
    background: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};