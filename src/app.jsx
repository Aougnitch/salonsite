import { Routes, Route } from "react-router-dom";
import NailSalon from "./nailSalon";
import PricingPage from "./pricingPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<NailSalon />} />
      <Route path="/pricingPage" element={<PricingPage />} />
    </Routes>
  );
}

export default App;
