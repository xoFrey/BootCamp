import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UseEffect from "./pages/UseEffect/UseEffect";
import Fetch from "./pages/Fetch/Fetch";
import Header from "./components/Header/Header";
import DetailPage from "./pages/DetailPage/DetailPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<UseEffect />} />
        <Route path="/fetch" element={<Fetch />} />
        {/* nach dem : ost der key im objekt was wir uns rausziehen können, name des keys ist uns überlassen (muss nicht id sein) */}
        {/* : <- muss sein damit wir eine dynamische seite bekommen  */}
        <Route path="/fetch/:id" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
