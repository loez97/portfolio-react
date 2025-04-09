import React, { useEffect, useState } from "react";
import "../assets/styles/Projects.css";

const formateDate = (dateString) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

const Projects = () => {
  const [data, setData] = useState(null);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    const apiGitHub = async () => {
      const res = await fetch(`https://api.github.com/users/loez97/repos`);
      const json = await res.json();

      setData(json);
    };
    apiGitHub();
  }, []);

  const loadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  return (
    <div>
      <section id="projects" className="projects">
        <h3 className="projects__title">Projetos</h3>
        <p className="projects__description">Aqui você pode ver os projetos que desenvolvi. Estou constantemente trabalhando em novas soluções.</p>
        <div className="projects__list">
          {data &&
            data.slice(0, visibleCount).map((item, index) => (
              <div key={index} className="projects__item">
                <h4 className="projects__name">{item.name}</h4>
                <a href={item.html_url} target="_blank">
                  Repositório
                </a>
                <span className="projects__date">{formateDate(item.created_at)}</span>
              </div>
            ))}
        </div>
        {data && visibleCount < data.length && (
          <button className="loadMoreBtn" onClick={loadMore}>
            Ver mais
          </button>
        )}
      </section>
    </div>
  );
};

export default Projects;
