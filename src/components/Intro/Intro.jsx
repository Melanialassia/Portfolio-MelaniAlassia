//HOOKS
import { useTranslation } from "react-i18next";
//COMPONENT
import Contact from "./Contact/Contact";
//FUNCTION
import { getImageUrl } from "../../utils";
//JSON
import intro from "../../data/intro.json";
//STYLE
import style from "./Intro.module.css";

const Intro = () => {
  // const scrollToContact = () => {
  //   const contactSection = document.getElementById("contact");
  //   contactSection.scrollIntoView({ behavior: "smooth" });
  // };

  const [t, i18n] = useTranslation("global");

  return (
    <section className={style.container}>
      <div className={style.content}>
        <h1 className={style.title}>{t("intro.title")}</h1>
        <p className={style.description}>{t("intro.description")}</p>
        <div className={style.contactContainer}>
          {/* <button onClick={scrollToContact} className={style.contact}>
            Contactame
          </button> */}
          {intro.map((e, id) => {
            return (
              <Contact key={id} name={e.name} image={e.image} URL={e.URL} />
            );
          })}
          <a
            href={getImageUrl("intro/CV/MelaniAlassia.pdf")}
            download="MelaniAlassia.pdf"
            className={style.cv}
          >
            <div>
              <img
                src={getImageUrl("intro/cv.png")}
                alt="iconCv"
                className={style.cvImage}
              />
            </div>
          </a>
        </div>
      </div>
      <img
        src={getImageUrl("intro/profile.jpg")}
        alt="Melani"
        className={style.image}
      />
    </section>
  );
};

export default Intro;
