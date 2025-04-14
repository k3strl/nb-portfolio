// import React from 'react';

type ProjectCardProps = {
    title: string;
    img: string;
    desc: string;
    pageLink: string;
    gitLink: string;
  };


const ProjectCard = ({ title, img, desc, pageLink, gitLink }: ProjectCardProps) => {
  return (
    <div className="project-item">
      <img src={img} alt={title} className="project-img" />
      <div className="project-overlay">
        <h3>{title}</h3>
        <p>{desc}</p>
        <div className="project-links">
          <a href={pageLink}><i className="fas fa-link"></i></a>
          <a href={gitLink}><i className="fab fa-github"></i></a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;