import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import MenProducts from "./pages/MenProducts";
import WomensProducts from "./pages/WomensProducts";
import About from "./pages/About";
import MenDetails from "./pages/MenDetails"
import WomenDetails from "./pages/WomenDetails";
import CheckOut from "./pages/CheckOut";
import Contact from "./pages/Contact";


function App() {
  const [user, setUser] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("token") === "kenan2004") {
      setUser(true);
    }
  }, []);
  return (
    <Routes>
      <Route
        path="/"
        element={
          user ? <Navigate to="/dashboard" /> : <Login setUser={setUser} />
        }
      />
      <Route
        path="/dashboard"
        element={user ? <Dashboard setUser={setUser} /> : <Navigate to="/" />}
      />
      <Route
        path="/menProducts"
        element={user ? <MenProducts setUser={setUser} /> : <Navigate to="/" />}
      />
      <Route
        path="/checkOut"
        element={user ? <CheckOut setUser={setUser} /> : <Navigate to="/" />}
      />
      <Route
        path="/womenProducts"
        element={
          user ? <WomensProducts setUser={setUser} /> : <Navigate to="/" />
        }
      />
      <Route
        path="/men-details/:id"
        element={user ? <MenDetails setUser={setUser} /> : <Navigate to="/" />}
      />
      <Route
        path="/women-detail/:id"
        element={
          user ? <WomenDetails setUser={setUser} /> : <Navigate to="/" />
        }
      />
      <Route
        path="/about"
        element={user ? <About setUser={setUser} /> : <Navigate to="/" />}
      />
      <Route
        path="/contact"
        element={user ? <Contact setUser={setUser} /> : <Navigate to="/" />}
      />
      {/* <Route
        path="/card"
        element={user ? <AddCard setUser={setUser} /> : <Navigate to="/" />}
      /> */}

      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
