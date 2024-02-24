//FUNCTION
import { getImageUrl } from "../../../utils";
//STYLE
import style from './Contact.module.css';

const Contact = ({name, image, URL}) => {
    return (
        <div className={style.container}>
            <a href={URL} target="_blank">
                <div>
                    <img src={getImageUrl(image)} alt={name} className={style.image}/>
                </div>
            </a>
        </div>
    )
};

export default Contact;