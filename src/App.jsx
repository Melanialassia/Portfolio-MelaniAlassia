//HOOKS
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
//COMPONENTS
import Projects from "./components/Projects/Projects";
import NavBar from "./components/NavBar/NavBar";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";
import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import Email from "./components/Email/Email";
import Theme from "./components/Theme/Theme";
//STYLE
import style from "./App.module.css";

function App() {
  const [t, i18n] = useTranslation("global");
  const [dark, setDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme"); //recupero el valor del localStorage
    return savedTheme === "true";
  });

  const handleChange = () => {
    setDark(!dark); //niego el valor para cambiar el estado, es decir si dark es tru lo cambia a false
  };

  useEffect(() => {
    localStorage.setItem("theme", dark); //guarda el valor de estado local
    const selectedLanguage = localStorage.getItem("language");
    if (selectedLanguage) {
      i18n.changeLanguage(selectedLanguage);
    }
  }, [dark]); //le indicamos que este atento al estado local que es el que va a estar cambiando

  const changeLanguage = (language) => {
    localStorage.setItem("language", language);
    i18n.changeLanguage(language);
  };

  return (
    <div className={style.App} data-theme={dark ? "light" : "dark"}>
      <NavBar changeLanguage={changeLanguage} />
      <Intro />
      <About />
      <Projects />
      <Skills />
      <Email />
      <Footer />
      <Theme dark={dark} handleChange={handleChange} />
    </div>
  );
}

export default App;
