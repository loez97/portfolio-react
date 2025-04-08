import React from "react";
import "../assets/styles/Skills.css";

import htmlIcon from "../assets/icons/skills/html-5.png";
import cssIcon from "../assets/icons/skills/css-3.png";
import sassIcon from "../assets/icons/skills/sass.png";
import twIcon from "../assets/icons/skills/tailwind.png";
import bsIcon from "../assets/icons/skills/bootstrap.png";
import jsIcon from "../assets/icons/skills/js.png";
import reactIcon from "../assets/icons/skills/react.png";
import tsIcon from "../assets/icons/skills/typescript.png";
import nodeIcon from "../assets/icons/skills/node-js.png";
import mdbIcon from "../assets/icons/skills/mongodb.png";
import apiIcon from "../assets/icons/skills/api.png";
import postmanIcon from "../assets/icons/skills/postman.png";
import gitIcon from "../assets/icons/skills/git.png";
import dockerIcon from "../assets/icons/skills/docker.png";
import figmaIcon from "../assets/icons/skills/figma.png";

const skillIcons = [
  { name: "HTML5", icon: htmlIcon },
  { name: "CSS3", icon: cssIcon },
  { name: "SASS", icon: sassIcon },
  { name: "Tailwind", icon: twIcon },
  { name: "Bootstrap", icon: bsIcon },
  { name: "Javascript", icon: jsIcon },
  { name: "React JS", icon: reactIcon },
  { name: "Typescript", icon: tsIcon },
  { name: "Node JS", icon: nodeIcon },
  { name: "Mongo DB", icon: mdbIcon },
  { name: "Api", icon: apiIcon },
  { name: "Postman", icon: postmanIcon },
  { name: "Git", icon: gitIcon },
  { name: "Docker", icon: dockerIcon },
  { name: "Figma", icon: figmaIcon },
];

const Skills = () => {
  return (
    <div>
      <section id="skills" className="skills">
        <h3 className="skills__title">Habilidades</h3>
        <div className="skills__list" id="skillsList">
          {skillIcons.map((skill) => (
            <img className="skills__item" src={skill.icon} alt={skill.name} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skills;
