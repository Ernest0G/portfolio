import { ProjectItem } from "../components";
import { ProjectsList } from "../assets/projects.js";

const Projects = () => {
  return (
    <div className="w-full">
      <h1 id="Projects" className="text-xl font-bold bg-accent text-white text-center">
        Projects
      </h1>
      <br></br>
      <div className="carousel w-full sm:grid sm:w-1/2">
        {ProjectsList.map((project, index) => {
          return (
            <ProjectItem
              key={index}
              title={project.title}
              desc={project.desc}
              live={project.live}
              git={project.git}
              index={index}
              images={project.images}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
