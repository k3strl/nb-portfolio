// import { Link } from 'react-router-dom';
import ProjectCard from "../components/ProjectCard";
import projectsData from "../data/projectsData";

const projects = projectsData;
const Projects = () => {
  return (
    <>
      <h2>Projects</h2>
      <div className="project-container">
        <section id="projects" className="projects">
          <div className="container">
            <div className="section-title">
            </div>
            <div className="projects-container">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Projects;