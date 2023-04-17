import React from "react";
import { 
  Route, 
  BrowserRouter as Router, 
  Routes } from "react-router-dom";
import Checkout from "./Components/components/Checkout";
import Homepage from "./Pages/Homepage/Homepage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
      </Routes>
    </Router>
  );
}

export default App;
