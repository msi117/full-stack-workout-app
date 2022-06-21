import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./components/Dashboard";
import Exercises from "./pages/Exercises";
function App() {
  return (
    <div className="border w-96 mx-auto">
    <BrowserRouter>
      <Header />


    <Routes>
      <Route path="/" element={ <Dashboard /> } />
      <Route path="/login" element={ <Login /> } />
      <Route path="/register" element={ <Register />} />
      <Route path="/exercises" element= { <Exercises/> } />
    </Routes>

    </BrowserRouter>
    </div>
  );
}

export default App;
