import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Products from "./pages/Products/Products";
import Detail from "./pages/Detail/Detail";
import Random from "./pages/Random/Random";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/random" element={<Random />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
