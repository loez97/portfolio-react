import React from "react";
import { useEffect, useRef } from "react";
import "../assets/styles/Menu.css";

const Menu = () => {
  const navRef = useRef(null);

  useEffect(() => {
    console.log("useEffect ativado!");
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY)
      if (window.scrollY > 5550) {
        navRef.current.classList.add("navbar--scrolled");
      } else {
        navRef.current.classList.remove("navbar--scrolled");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div>
      <nav ref={navRef} className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <a href="#">Início</a>
          </li>
          <li className="nav__item">
            <a href="#projects">Projetos</a>
          </li>
          <li className="nav__item">
            <a href="#contact">Contato</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
