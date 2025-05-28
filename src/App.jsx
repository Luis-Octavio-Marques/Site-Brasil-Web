import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AustraliaPage from "./pages/AustraliaPage";
import BrazilPage from "./pages/BrazilPage";
import EgyptPage from "./pages/EgyptPage";
import FrancePage from "./pages/FrancePage";
import JapanPage from "./pages/JapanPage";
import RightNav from "./components/RightNav";

function App() {
  return (
    <>
      <p> Teste </p>
      <Link to="/australia">Australia</Link>
      <Link to="/brazil">Brazil</Link>
      <Link to="/egypt">Egypt</Link>
      <Link to="/france">France</Link>
      <Link to="/japan">Japan</Link>
    </>
  );
}

export default App;
