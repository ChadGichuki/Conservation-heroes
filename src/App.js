import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home"
import Navbar from "./Components/Navbar"
import Leaderboard from './Components/Leaderboard';
import Dashboard from './Components/Dashboard';
import Signup from './Components/Signup';
import UserPool from './UserPool';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/leaderboard" element={<Leaderboard/>} />
        <Route exact path="/dashboard" element={<Dashboard/>} />
        <Route exact path="/signup" element={<Signup/>} />
      </Routes>
    </div>
  );
}

export default App;
