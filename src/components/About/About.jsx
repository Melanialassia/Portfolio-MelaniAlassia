//HOOKS
import { useTranslation } from "react-i18next";
import React, { useEffect } from "react";
//FUNCTION
import { getImageUrl } from "../../utils";
//LIBRARY
import AOS from "aos";
import "aos/dist/aos.css";
// STYLES
import style from "./About.module.css";

const About = ({ dark }) => {
  const [t, i18n] = useTranslation("global");

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const iconColorPerson = !dark
    ? getImageUrl("about/iconAbout.png")
    : getImageUrl("about/iconAbout-black.png");

  const iconColorComputer = !dark
    ? getImageUrl("about/computer.png")
    : getImageUrl("about/computer-black.png");

  const iconColorRocket = !dark
    ? getImageUrl("about/rocket.png")
    : getImageUrl("about/rocket-black.png");
    
  return (
    <section className={style.container} id="about">
      <h2 className={style.title} data-aos="fade-right">
        {t("about.title")}
      </h2>
      <div className={style.content}>
        <ul className={style.aboutItems}>
          <li className={style.aboutItem}>
            <img
              src={iconColorPerson}
              alt="iconAbout"
              className={style.image}
            />
            <div className={style.aboutItemText}>
              <h3>{t("about.Full Stack Developer")}</h3>
              <p>{t("about.description-one")}</p>
            </div>
          </li>
          <li className={style.aboutItem}>
            <img
              src={iconColorComputer}
              alt="iconComputer"
              className={style.image}
            />
            <div className={style.aboutItemText}>
              <p>{t("about.description-two")}</p>
            </div>
          </li>
          <li className={style.aboutItem}>
            <img
              src={iconColorRocket}
              alt="iconComputer"
              className={style.image}
            />
            <div className={style.aboutItemText}>
              <p>{t("about.description-three")}</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default About;
