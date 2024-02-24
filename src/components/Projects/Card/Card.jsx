//FUNCTION
import { getImageUrl } from "../../../utils";
//STYLE
import style from './Card.module.css';

const Card = ({name, image, description, skills, repository, t}) => {

    return (
      <div className={style.container}>
      <img src={getImageUrl(image)} alt={name} className={style.image} />
      <div className={style.content}>
        <h3 className={style.name}>{name}</h3>
        <p className={style.description}>{description}</p>
        <ul className={style.skills}>
          {skills.map((s, id) => (
            <li key={id} className={style.skill}>{s}</li>
          ))}
        </ul>
        <div className={style.links}>
          <a href={repository} className={style.link}>
            <img src={getImageUrl("intro/github.png")} alt="iconGithub" />
          </a>
        </div>
      </div>
    </div>
    )
};

export default Card;