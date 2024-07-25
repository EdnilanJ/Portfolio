import React from "react";
import {BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import First from "./components/first.js";


function App() {
  return (
   
      
          <Router>
            <div >
            <Routes>
                <Route path="/" element={<First/>} />
                
            </Routes>
            </div>
          </Router>
      
     
      
    );
  }

export default App;

