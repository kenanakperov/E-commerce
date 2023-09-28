import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const onHandleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };
  const signup = () => {
    axios.post("http://localhost:3003/create-data", loginData).then((res) => {
      if ((res.status = 201)) {
        navigate("/");
      }
    });
  };
  return (
    <div className="div1">
      <div className="div2">
        <div className="div3">
          <h2>Register</h2>
          <div className="div4">
            <input
              type="text"
              placeholder="Please enter your name: "
              onChange={onHandleChange}
              name="username"
            />
            <input
              type="text"
              placeholder="Please enter your email: "
              onChange={onHandleChange}
              name="email"
            />
            <input
              type="password"
              placeholder="Please enter your password: "
              onChange={onHandleChange}
              name="password"
            />
            <button
              disabled={
                loginData.email === ""
                  ? true
                  : loginData.password === ""
                  ? true
                  : loginData.username === ""
                  ? true
                  : false
              }
              onClick={signup}
            >
              Sign up
            </button>
            <h5 onClick={() => navigate("/")}>
              Already have an account? Sign in
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
