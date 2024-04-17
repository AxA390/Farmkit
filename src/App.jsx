import React from "react";
import LandingPage from "./components/LandingPage";
import Fruits from "./components/Fruits";
import Apples from "./components/Apples";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Importing necessary components from react-router-dom

// Main App component
const App = () => {
  return (
    <Router>
      {" "}
      {/* Router component to provide navigation functionality */}
      <div>
        {" "}
        {/* Main container for all routes */}
        <Routes>
          {" "}
          {/* Routes component for defining different routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/fruits" element={<Fruits />} />
          <Route path="/apples" element={<Apples />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App; // Exporting the App component
