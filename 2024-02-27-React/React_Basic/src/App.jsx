// # Ordnerstruktur in React
// :node_modules - dort befinden sich alle Pakete die für React benötigt werden - wir können auch Pakete zusätzlich installieren
// :public - dort werden alle Dateien gespeichert die unverändert ausgegeben werden (bilder / fonts)
// :src - hier werden wir 99% unsererZeit verbringen. Hier programmieren wir - In der Regel erstellen wir in den "src"-Ordner nochmal 2 Ordner mit "pages" & "components"
// :gitignore - Für Dateien (wie API Keys) was nicht in Github hochgeladen werden soll
// :index.html - Ist der Startpunkt unserer App. In unserem div hier it der id="root" wird alles reingerendert
// :package-lock.json - hier befinden sich alle benötigten npm pakete(Name, Versionsnummer, welche React version, etc.)
// :package.json - hier befinden sich infos über unsere App -> Name Version etc.
// :Readme.md - Infos über Projekt
// :vite.config.js - hier können wir vite anpassen

// :jsx - JavaScript Syntax Extension

// # App.css vs. Index.css
// :index.css - alle globalen stylings, font-family, *,etc
// :App.css - alle stylings für die page App.jsx

import "./App.css";
import Home from "./page/Home/Home";

function App() {
  return <Home />;
}

export default App;
