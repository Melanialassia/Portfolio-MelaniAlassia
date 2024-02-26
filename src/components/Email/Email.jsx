//HOOKS
import { useTranslation } from "react-i18next";
import React, { useEffect } from "react";
//FUNCTION
import { getImageUrl } from "../../utils";
//COMPONENTS
import FormEmail from "./FormEmail/FormEmail";
//LIBRARY
import AOS from "aos";
import "aos/dist/aos.css";
//STYLE
import style from "./Email.module.css";

const Email = ({ dark }) => {
  const [t, i18n] = useTranslation("global");

  const iconColorPlane = !dark
    ? getImageUrl("email/email.png")
    : getImageUrl("email/email-black.png");

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="contact" className={style.container}>
      <h2 className={style.title} data-aos="fade-right">
        {t("contact.title")}
      </h2>
      <div className={style.contents}>
        <div className={style.leftContent}>
          <p>{t("contact.description")}</p>
          <div className={style.emailContainer}>
            <img
              src={iconColorPlane}
              alt="iconoEmail"
              className={style.image}
            />
            <p>melani.alassia@hotmail.com</p>
          </div>
        </div>
        <div className={style.form}>
          <FormEmail dark={dark} />
        </div>
      </div>
    </section>
  );
};

export default Email;
