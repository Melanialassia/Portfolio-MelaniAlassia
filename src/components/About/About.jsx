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

const About = () => {
  const [t, i18n] = useTranslation("global");

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className={style.container} id="about">
      <h2 className={style.title} data-aos="fade-right">
        {t("about.title")}
      </h2>
      <div className={style.content}>
        <ul className={style.aboutItems}>
          <li className={style.aboutItem}>
            <img
              src={getImageUrl("about/iconAbout.png")}
              alt="iconAbout"
              className={style.image}
            />
            <div className={style.aboutItemText}>
              <h3>{t("about.Full Stack Developer")}</h3>
              <p>
              {t("about.description-one")}
              </p>
            </div>
          </li>
          <li className={style.aboutItem}>
            <img
              src={getImageUrl("about/computer.png")}
              alt="iconComputer"
              className={style.image}
            />
            <div className={style.aboutItemText}>
              <p>
              {t("about.description-two")}
              </p>
            </div>
          </li>
          <li className={style.aboutItem}>
            <img
              src={getImageUrl("about/rocket.png")}
              alt="iconComputer"
              className={style.image}
            />
            <div className={style.aboutItemText}>
              <p>
              {t("about.description-three")}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default About;
