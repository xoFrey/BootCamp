import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// * Import der Seiten
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Countries from "./pages/Countries/Countries";

// * Import des Context
import {
  LoadingContext,
  FetchContext,
  darkLightContext,
} from "./context/Context";

import { useState } from "react";
import Loadingscreen from "./pages/Loadingscreen/Loadingscreen";

function App() {
  const [loading, setLoading] = useState(false);
  const [countries, setCountries] = useState([]);
  const [dark, setDark] = useState(false);

  console.log(countries);

  return (
    <section className={`app ${dark && "dark"}`}>
      {/* loadingContext.Provider sorgt dafür, dass der state "loading" überall verfügbar ist */}
      {/* mit value verbinden wir unseren useState mit dem Provider damit wir den state global machen */}
      <darkLightContext.Provider value={{ dark, setDark }}>
        <FetchContext.Provider value={{ countries, setCountries }}>
          <LoadingContext.Provider value={{ loading, setLoading }}>
            {loading ? (
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/countries" element={<Countries />} />
                </Routes>
              </BrowserRouter>
            ) : (
              <>
                <Loadingscreen />
              </>
            )}
          </LoadingContext.Provider>
        </FetchContext.Provider>
      </darkLightContext.Provider>
    </section>
  );
}

export default App;
