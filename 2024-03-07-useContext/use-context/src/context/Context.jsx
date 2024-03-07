import { createContext } from "react";

// Wir erstellen ein Context und exportieren ihn damit er überall verfügbar ist, wenn wir importieren
export const LoadingContext = createContext();
export const FetchContext = createContext();
export const darkLightContext = createContext();
