import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({ setUser }) => {
  const navigate = useNavigate();
  const [err, setErr] = useState("");
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const [axiosData, setAxiosData] = useState([]);
  const onHandleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    axios("http://localhost:3003/get-data").then((res) => {
      setAxiosData(res.data.data);
    });
  }, []);

  const login = () => {
    const usernames = axiosData.map((item) => item.username);
    const passwords = axiosData.map((item) => item.password);

    const indexName = usernames.indexOf(loginData.username);
    const indexPass = passwords.indexOf(loginData.password);

    if (
      usernames.includes(loginData.username) &&
      passwords.includes(loginData.password) &&
      indexName === indexPass
    ) {
      setUser(true);
      localStorage.setItem("token", "kenan2004");
      navigate("/dashboard");
    } else {
      setErr("Username or password is wrong!!");
    }
  };

  return (
    <div className="div1">
      <div className="div2">
        <div className="div3">
          <h2>Login</h2>
          <span>{err}</span>
          <div className="div4">
            <input
              type="text"
              placeholder="Please enter your username: "
              onChange={onHandleChange}
              name="username"
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
                  : false
              }
              onClick={login}
            >
              Log-in
            </button>
            <h5 onClick={() => navigate("/register")}>
              If you don't have account? Sign up
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
