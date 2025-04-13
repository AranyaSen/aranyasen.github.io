import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import NotFound from "./components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/myPortfolio" Component={LandingPage} />
        <Route path="*" Component={NotFound}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
