import React, { useState, useEffect } from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <AppRoutes />
    </div>
  );
};

export default App;
