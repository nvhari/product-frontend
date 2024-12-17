import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Header from "./Pages/Header";
const MyContext = createContext();
const App = () => {
  const [authenticated, setAuthenticated] = useState(false);
  return (
    <Router>
      <Header
        authenticated={authenticated}
        setAuthenticated={setAuthenticated}
      />
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route
          path="/login"
          element={<Login setAuthenticated={setAuthenticated} />}
        />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/home"
          element={authenticated ? <Home /> : <Navigate to="/login" replace />}
        />
        {/* Add this if you intend to navigate to "/home" */}
        <Route
          path="/home"
          element={authenticated ? <Home /> : <Navigate to="/login" replace />}
        />
      </Routes>
    </Router>
  );
};

export default App;
export { MyContext };
