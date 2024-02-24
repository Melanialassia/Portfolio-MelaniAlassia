import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
//LIBRARY
import { initReactI18next } from "react-i18next";
import i18next from "i18next";
import "@fontsource/outfit";
import "@fontsource/roboto";
//LANGUAGE
import english from "./Translation/English/global.json";
import spanish from "./Translation/Spanish/global.json";
// import spanish from "./Translation/Spanish/global.json";
//STLYE
import "./index.css";

i18next
.use(initReactI18next)
.init({
  interpolation: { escapeValue: false },
  lng: "spanish", // le indicamos con el idioma que va a empezar la pagina
  resources: {
    spanish: {
      global: spanish,
    },
    english: {
      global: english,
    },
  },
});

 ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
       <App />    
   </React.StrictMode>
 );


