import React, { useEffect } from "react";
//FUNCTION
import { getImageUrl } from "../../utils";
//LIBRARY
import AOS from "aos";
import "aos/dist/aos.css";
//JSON
import skills from "../../data/skills.json";
//STYLES
import style from "./Skills.module.css";

const Skills = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);

  return (
    <section id="skills" className={style.container}>
      <h2 className={style.title} data-aos="fade-right">Skills</h2>
      <div className={style.content}>
        <div className={style.skills}>
          {skills.map((e, id) => {
            return (
              <div className={style.skill}>
                <a key={id} href={e.URL} target="_blank">
                  <div className={style.image} data-aos="zoom-in">
                    <img src={getImageUrl(e.image)} alt={e.title} />
                  </div>
                  <p>{e.title}</p>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
