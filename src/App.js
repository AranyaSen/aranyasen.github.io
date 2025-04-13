import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/myPortfolio" Component={LandingPage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
