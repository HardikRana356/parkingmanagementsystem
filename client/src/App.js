import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar";
//import Footer from "./Component/Footer";
import SignUp from "./Components/SignUp";
import ParkingBooking from "./Components\/ParkingBooking";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SignUp/>
      <ParkingBooking />
      
    </div>
  );
}

export default App;