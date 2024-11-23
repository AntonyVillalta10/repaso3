import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CocktailDetailsPage from "./pages/CocktailDetailsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cocktail/:id" element={<CocktailDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
