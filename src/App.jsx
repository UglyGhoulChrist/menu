import "./App.css";
import HomePage from "./components/HomePage";
import DriftPage from "./components/DriftPage";
import TimeAttackPage from "./components/TimeAttackPage";
import ForzaPage from "./components/ForzaPage";

function App() {
  return (
    <div className="page">
      <HomePage />
      <DriftPage />
      <TimeAttackPage />
      <ForzaPage />
    </div>
  );
}

export default App;
