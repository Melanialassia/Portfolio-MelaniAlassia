//FUNCTION
import { getImageUrl } from "../../../utils";
//STYLE
import style from "./Card.module.css";

const Card = ({ name, image, description, skills, deploy, repository, dark }) => {
  const iconColorGithub = !dark
  ? getImageUrl("intro/github.png")
  : getImageUrl("intro/github-black.png");

  return (
    <div className={style.container}>
       <a href={deploy} target="_blank" rel="noopener noreferrer">
        <img src={getImageUrl(image)} alt={name} className={style.image} />
      </a>
      <div className={style.content}>
        <h3 className={style.name}>{name}</h3>
        <p className={style.description}>{description}</p>
        <ul className={style.skills}>
          {skills.map((s, id) => (
            <li key={id} className={style.skill}>
              {s}
            </li>
          ))}
        </ul>
        <div className={style.links}>
          <a href={repository} className={style.link}>
            <img src={iconColorGithub} alt="iconGithub" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
