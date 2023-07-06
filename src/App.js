import "./App.css";
import { useState } from "react";

import { Routes, Route, BrowserRouter } from "react-router-dom"
import Navigation from "./Navigation";
import PasswordGenerator from "./PasswordGenerator";

function App() { 

  return (
    <div>
       <BrowserRouter>
       <Navigation />
        <Routes>
          <Route path="password-generator" element={<PasswordGenerator />}/>
        </Routes>
       </BrowserRouter>

    </div>
     
  );
}

export default App;
