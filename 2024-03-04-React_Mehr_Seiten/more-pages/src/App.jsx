import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";

import { BrowserRouter, Routes, Route, Router } from "react-router-dom";

// :Die App.jsx ost der dreh und angelpunklt unserer app. Hier vergeben wir mit Hilfe von react-router dom den seiten einen link damit jede seite einen link hat

// : npm pakete die wir installiert haben müssen importiert werden
// :path="/" => hier definiere ich den Pfad unter welchen link meine Seite zu finden ist
// : element={<Home/>} => hier sagen wir wenn / aufgerufen worden ist, auf welche Seite referriert wird

function App() {
  return (
    <BrowserRouter>
      {/* Path-> frei definierbar */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
