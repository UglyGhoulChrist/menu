import "./App.css";
import HomePage from "./components/HomePage";
import DriftPage from "./components/DriftPage";
import TimeAttackPage from "./components/TimeAttackPage";
import ForzaPage from "./components/ForzaPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";

function App() {
  return (
    <BrowserRouter>
      <div className="page">
        <Menu />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="drift" element={<DriftPage />} />
          <Route path="timeattack" element={<TimeAttackPage />} />
          <Route path="forza" element={<ForzaPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
