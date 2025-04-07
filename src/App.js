import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" Component={LandingPage} />
      </Routes>
    </HashRouter>
  );
}

export default App;
