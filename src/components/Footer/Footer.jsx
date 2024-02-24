//FUNCTION
import { getImageUrl } from "../../utils";
//STYLE
import style from "./Footer.module.css";

const Footer = () => {
    return (
        <div className={style.container}>
            <img src={getImageUrl("footer/copyright-black.png")}/>
        </div>
    )
};

export default Footer;
