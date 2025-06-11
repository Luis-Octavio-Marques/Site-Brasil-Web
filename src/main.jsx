import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Páginas principais
import History from "./pages/History.jsx";
import Culture from "./pages/Culture.jsx";
import Gastronomy from "./pages/Gastronomy.jsx";
import Nature from "./pages/Nature.jsx";
import Language from "./pages/Language.jsx";
import Flag from "./pages/Flag.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Página inicial */}
        <Route path="/" element={<App />} />

        {/* Rotas dinâmicas para cada país */}
        <Route path="/history" element={<History />} />
        <Route path="/culture" element={<Culture />} />
        <Route path="/gastronomy" element={<Gastronomy />} />
        <Route path="/nature" element={<Nature />} />
        <Route path="/language" element={<Language />} />
        <Route path="/flag" element={<Flag />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
