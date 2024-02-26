//HOOKS
import { useTranslation } from "react-i18next";
import React, { useEffect } from "react";
//COMPONENT
import Card from "./Card/Card";
//LIBRARY
import AOS from "aos";
import "aos/dist/aos.css";
//LANGUAGE
import english from "../../Translation/English/global.json";
import spanish from "../../Translation/Spanish/global.json";
//STYLE
import style from "./Projects.module.css";

const Projects = ({ dark }) => {
  const [t, i18n] = useTranslation("global");
  const currentLanguage = i18n.language || "english";
  const translations = currentLanguage === "english" ? english : spanish;

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="projects" className={style.container}>
      <h2 className={style.title} data-aos="fade-right">
        {t("navBar.projects")}
      </h2>
      <div className={style.projects}>
        {translations.projects.map((p, id) => {
          return (
            <Card
              key={id}
              name={p.name}
              image={p.image}
              description={p.description}
              skills={p.skills}
              repository={p.repository}
              dark={dark}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Projects;

/*
{
  t("pojects".map((p, id) => {
    return (
       <Card
              key={id}
              name={p.name}
              image={p.image}
              description={p.description}
              skills={p.skills}
              repository={p.repository}
            />
    )
  }))
}
*/
