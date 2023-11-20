import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";
import ProductsPage from "./page/ProductsPage";
import ProductPage from "./page/ProductPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        // on place id en variable afin de le rendre dynamique au changement de page (:id)
        <Route path="/products/:id" element={<ProductPage />} />  
      </Routes>
    </BrowserRouter>
  );
}

export default App;
