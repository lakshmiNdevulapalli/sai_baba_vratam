import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Vratam from "./pages/Vratam";
import Astottaram from "./pages/Astottaram";
import SaiBabaVrataKatha from "./pages/SaiBabaVrataKatha";
import SaiBabaAarti from "./pages/SaiBabaAarti";
import Tabs from "./pages/Tabs.tsx";
import SaiBabaBhajans from "./pages/SaiBabaBhajans.tsx";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vratamDetails" element={<Vratam />} />
          <Route path="/astottaram" element={<Astottaram />} />
          <Route path="/saiBabaVrataKatha" element={<SaiBabaVrataKatha />} />
          <Route path="/aarti" element={<SaiBabaAarti />} />
          <Route path="/saiBabaBhajans" element={<SaiBabaBhajans />} />
        </Routes>
        <Tabs />
      </div>
    </Router>
  );
};

export default App;
