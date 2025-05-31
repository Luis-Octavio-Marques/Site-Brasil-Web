import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "./i18n";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Páginas principais
import AustraliaPage from "./pages/AustraliaPage";
import BrazilPage from "./pages/BrazilPage";
import EgyptPage from "./pages/EgyptPage";
import FrancePage from "./pages/FrancePage";
import JapanPage from "./pages/JapanPage";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Página inicial */}
        <Route path="/" element={<App />} />

        {/* Páginas principais dos países */}
        <Route path="/australia" element={<AustraliaPage />} />
        <Route path="/brazil" element={<BrazilPage />} />
        <Route path="/egypt" element={<EgyptPage />} />
        <Route path="/france" element={<FrancePage />} />
        <Route path="/japan" element={<JapanPage />} />

        {/* Rotas dinâmicas para cada país */}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
