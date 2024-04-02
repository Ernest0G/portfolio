import { ProjectItem } from "../components";
import { ProjectsList } from "../assets/projects.js";

const Projects = () => {
  return (
    <div className="w-full">
      <h1 id="Projects" className="text-xl font-bold bg-accent text-white text-center">
        Projects
      </h1>
      <br></br>
      <div className="carousel w-full">
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
      <div className="flex bg-accent justify-center w-full py-2 gap-2">
        {ProjectsList.map((project, index) => {
          return (
            <a href={`#item${index + 1}`} className="bg-primary text-white border-none btn btn-sm">
              {index + 1}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
