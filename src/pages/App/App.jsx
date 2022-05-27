import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Feed from "../Feed/Feed"; 
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import userService from "../../utils/userService";

function App() {
  const [user, setUser] = useState(userService.getUser()); // getUser decodes our JWT token, into a javascript object
  // this object corresponds to the jwt payload which is defined in the server signup or login function that looks like
  // this  const token = createJWT(user); // where user was the document we created from mongo

  function handleLogin() {
    console.log('login');
    console.log(userService.getUser());
    setUser(userService.getUser()); // getting the user from localstorage decoding the jwt
  }

  function handleSignUp(props) {
    setUser(userService.getUser()); // getting the user from localstorage decoding the jwt
  }

  function handleLogout() {
    userService.logout();
    setUser(null);
  }

  if (user) {
    return (
      <Routes>
        <Route path="/" element={<Feed user={user} handleLogout={handleLogout} />} />
        <Route
          path="/login"
          element={<LoginPage handleLogin={handleLogin} />}
        />
        <Route
          path="/signup"
          element={<SignupPage handleSignUp={handleSignUp} />}
        />
        
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path="/login" element={<LoginPage handleLogin={handleLogin} />} />
      <Route path="/signup" element={<SignupPage handleSignUp={handleSignUp} />} />
      <Route path="/*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;
