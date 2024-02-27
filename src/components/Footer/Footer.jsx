//HOOKS
import { useTranslation } from "react-i18next";
//FUNCTION
import { getImageUrl } from "../../utils";
//STYLE
import style from "./Footer.module.css";

const Footer = ({ dark }) => {
  const [t, i18n] = useTranslation("global");

  const iconColorCopyright = !dark
    ? getImageUrl("footer/copyright.png")
    : getImageUrl("footer/copyright-black.png");

  return (
    <div className={style.container}>
      <img src={iconColorCopyright} className={style.image} />
      <p className={style.text}>Melani Alassia. {t("message.copyright")}</p>
    </div>
  );
};

export default Footer;
