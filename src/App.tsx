import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import AboutPage from "./pages/AboutPage";
import ProductPage from "./pages/ProductsPage";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<ProductPage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
