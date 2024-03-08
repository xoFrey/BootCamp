import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Gallery from "./pages/Gallery/Gallery";
import Header from "./components/Header/Header";
import { useState } from "react";
import Loading from "./pages/Loading/Loading";
import { DarkLightContext, LoadingContext } from "./context/Context";

function App() {
  const [loading, setLoading] = useState(false);
  const [dark, setDark] = useState(false);

  setTimeout(() => {
    setLoading(true);
  }, 2000);
  return (
    <>
      <DarkLightContext.Provider value={{ dark, setDark }}>
        <LoadingContext.Provider value={{ loading, setLoading }}>
          {loading ? (
            <section className={`app ${dark && "dark"}`}>
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/gallery" element={<Gallery />} />
                </Routes>
              </BrowserRouter>
            </section>
          ) : (
            <Loading />
          )}
        </LoadingContext.Provider>
      </DarkLightContext.Provider>
    </>
  );
}

export default App;
