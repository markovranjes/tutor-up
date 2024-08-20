import { useState } from "react";
import { login } from "../api/login";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const navigate = useNavigate();

  const loginClicked = async () => {
    try {
      const response = await login(email, password);
      if (response.status === 200) {
        localStorage.setItem("user", JSON.stringify({ ...response.data }));
        navigate("/courses");
      } else {
        setError("Invalid email or password");
      }
    } catch (error) {
      setError("Invalid email or password. Please try again.");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="page login_page">
      <span className="login_page_title">Tutor UP</span>

      <div className="login_block">
        <div className="login_field">
          <span className="login_field_title">Email </span>
          <input
            className="login_input"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="login_field">
          <span className="login_field_title">Password </span>
          <input
            className="login_input"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button className="login_button" onClick={loginClicked}>
          Login
        </button>
        {error}
        <span className="login_create_account">Don't have an account?</span>
        <a href="/signup">Create one here</a>
      </div>
    </div>
  );
};
