import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const validateForm = () => {
    // Email regex
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!email || !password) {
      setMessage("All fields are required!");
      return;
    }

    if (!email.match(emailPattern)) {
      setMessage("Invalid email format!");
      return;
    }

    if (password.length < 6) {
      setMessage("Password must be at least 6 characters!");
      return;
    }

    if (!/[A-Z]/.test(password)) {
      setMessage("Password must contain at least one uppercase letter!");
      return;
    }

    if (!/[0-9]/.test(password)) {
      setMessage("Password must contain at least one number!");
      return;
    }

    setMessage("Signup successful! ✅");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Smart Signup Form</h1>

      <input
        type="text"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /><br /><br />

      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /><br /><br />

      <button onClick={validateForm}>Sign Up</button>

      <p>{message}</p>
    </div>
  );
}

export default App;