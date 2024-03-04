import "./App.css";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./pages/Blog/Blog";
import Info from "./pages/Info/Info";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/info/:id" element={<Info />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
