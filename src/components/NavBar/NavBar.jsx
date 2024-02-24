//HOOKS
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
//FUNCTION
import { getImageUrl } from "../../utils";
// STYLE
import style from "./NavBar.module.css";

const NavBar = ({ changeLanguage }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const handleSectionChange = (sectionName) => {
    setActiveSection(sectionName);
    setMenuOpen(false); // Cerrar el menú al cambiar de sección
  };

  const [t, i18n] = useTranslation("global"); //que traduccion debe utilizar primero
  const currentLanguage = i18n.language;

  return (
    <nav className={style.navBar}>
      <a href="/" className={style.title}>
        Portfolio
      </a>
      <div className={style.menu}>
        <img
          className={style.hamburgerMenu}
          src={
            menuOpen
              ? getImageUrl("nav/closeMenu.png")
              : getImageUrl("nav/openMenu.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${style.menuItems} ${menuOpen && style.openMenu}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            {currentLanguage === "english" ? (
              <a onClick={() => changeLanguage("spanish")}>ES</a>
            ) : (
              <a onClick={() => changeLanguage("english")}>EN</a>
            )}
          </li>
          <li>
            <a
              href="#about"
              className={activeSection === "about" ? style.active : ""}
              onClick={() => handleSectionChange("about")}
            >
              {t("navBar.about")}
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={activeSection === "projects" ? style.active : ""}
              onClick={() => handleSectionChange("projects")}
            >
              {t("navBar.projects")}
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className={activeSection === "skills" ? style.active : ""}
              onClick={() => handleSectionChange("skills")}
            >
              {t("navBar.skills")}
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={activeSection === "contact" ? style.active : ""}
              onClick={() => handleSectionChange("contact")}
            >
              {t("navBar.contact")}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
