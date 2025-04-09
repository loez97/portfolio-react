import React from "react";
import introPhoto from "../assets/imgs/foto.png";
import "../assets/styles/intro.css";

const Intro = () => {
  return (
    <div>
      <section id="intro" className="intro">
        <img src={introPhoto} alt="Foto de Luiz Gonzaga" className="intro__photo" />
        <div className="intro__titles">
          <h1 className="intro__title">&lt;Luiz Gonzaga/&gt;</h1>
          <h2 className="intro__subtitle">Desenvolvedor Front-end & Designer</h2>
        </div>
        <p className="intro__details">
          Nascido em 1997 e desde cedo movido pela paixão por tecnologia. Sempre fui fascinado por tudo que envolve inovação — de celulares e videogames até computadores e gadgets que transformam
          nosso dia a dia.
        </p>
        <a href="./src/assets/docs/profile.pdf" className="intro__button" download>
          Download CV
        </a>
      </section>
    </div>
  );
};

export default Intro;
