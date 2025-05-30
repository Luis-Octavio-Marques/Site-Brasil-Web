import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "./i18n"; // 👈 Importação do i18n
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AustraliaPage from "./pages/AustraliaPage";
import BrazilPage from "./pages/BrazilPage";
import EgyptPage from "./pages/EgyptPage";
import FrancePage from "./pages/FrancePage";
import JapanPage from "./pages/JapanPage";
import RightNav from "./components/RightNav";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/australia" element={<AustraliaPage />} />
        <Route path="/brazil" element={<BrazilPage />} />
        <Route path="/egypt" element={<EgyptPage />} />
        <Route path="/france" element={<FrancePage />} />
        <Route path="/japan" element={<JapanPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
