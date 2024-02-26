//HOOKS
import { useTranslation } from "react-i18next";
//COMPONENT
//import Contact from "./Contact/Contact";
//FUNCTION
import { getImageUrl } from "../../utils";
//STYLE
import style from "./Intro.module.css";

const Intro = ({ dark }) => {
  // const scrollToContact = () => {
  //   const contactSection = document.getElementById("contact");
  //   contactSection.scrollIntoView({ behavior: "smooth" });
  // };

  const [t, i18n] = useTranslation("global");

  const iconColorCv = !dark
    ? getImageUrl("intro/cv.png")
    : getImageUrl("intro/cv-black.png");

  const iconColorLinkedin = !dark
    ? getImageUrl("intro/linkedin.png")
    : getImageUrl("intro/linkedin-black.png");

  const iconColorGithub = !dark
    ? getImageUrl("intro/github.png")
    : getImageUrl("intro/github-black.png");

  return (
    <section className={style.container}>
      <div className={style.content}>
        <h1 className={style.title}>{t("intro.title")}</h1>
        <p className={style.description}>{t("intro.description")}</p>
        <div className={style.contactContainer}>
          {/* <button onClick={scrollToContact} className={style.contact}>
            Contactame
          </button> */}
          {/* {intro.map((e, id) => {
            return (
              <Contact key={id} name={e.name} image={e.image} URL={e.URL} />
            );
          })} */}
          <a
            href={"https://linkedin.com/in/melani-alassia-0bb30a1b6"}
            download="MelaniAlassia.pdf"
            className={style.cv}
          >
            <div>
              <img
                src={iconColorLinkedin}
                alt="iconCv"
                className={style.cvImage}
              />
            </div>
          </a>
          <a
            href={"https://github.com/Melanialassia"}
            download="MelaniAlassia.pdf"
            className={style.cv}
          >
            <div>
              <img
                src={iconColorGithub}
                alt="iconCv"
                className={style.cvImage}
              />
            </div>
          </a>
          <a
            href={getImageUrl("intro/CV/MelaniAlassia.pdf")}
            download="MelaniAlassia.pdf"
            className={style.cv}
          >
            <div>
              <img src={iconColorCv} alt="iconCv" className={style.cvImage} />
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
