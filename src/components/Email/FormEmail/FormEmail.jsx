//HOOKS
import { useTranslation } from "react-i18next";
import React, { useRef, useState } from "react";
//FUNCTION
import { getImageUrl } from "../../../utils";
//LIBRARY
import emailjs from "@emailjs/browser";
import { message } from "antd";
//STYLE
import style from "./FormEmail.module.css";

const FormEmail = ({ dark }) => {
  const [t, i18n] = useTranslation("global");
  const [isSubmitted, setIsSubmitted] = useState(false); //para liampiar el formulario

  const iconColorPlane = !dark
    ? getImageUrl("email/plane.png")
    : getImageUrl("email/plane-black.png");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_02osy5v", "template_g3rxhjf", form.current, {
        publicKey: "dAkI61IG98hzztAVu",
      })
      .then(
        () => {
          message.success(t("message.message"));
          setIsSubmitted(true); //le indico que se aprobo
          form.current.reset(); //borro los campos completados por el cliente
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label className={style.label}>{t("contact.name")}</label>
      <input
        type="text"
        name="user_name"
        className={style.input}
        required
        minLength={5}
      />
      <label className={style.label}>{t("contact.email")}</label>
      <input
        type="email"
        name="user_email"
        className={style.input}
        required
        pattern="[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}"
      />
      <label className={style.label}>{t("contact.message")}</label>
      <textarea
        name="message"
        className={style.textarea}
        required
        minLength={50}
        maxLength={200}
      />
      <div className={style.send}>
        <input
          type="submit"
          value={t("contact.send")}
          className={style.inputSend}
        />
        <img src={iconColorPlane} alt="iconPlane" className={style.image} />
      </div>
    </form>
  );
};

export default FormEmail;
