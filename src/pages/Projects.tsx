import { ProjectItem } from "../components";
import { ProjectsList } from "../assets/data/projects.ts";
import "./Projects.css";
import { ProjectType } from "../types/projectType.ts";

const Projects = () => {
  return (
    <div className="w-full sm:flex sm:flex-col sm:justify-center items-center">
      <h1 id="Projects" className="text-xl sm:text-4xl font-bold bg-accent text-white text-center">
        Projects
      </h1>
      <br className="hidden sm:flex"></br>
      <div className="carousel show-scrollbar w-full sm:grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 sm:gap-y-10">
        {ProjectsList.map((project: ProjectType, index: number) => {
          return (
            <ProjectItem
              key={index}
              title={project.title}
              desc={project.desc}
              live={project.live}
              git={project.git}
              index={index}
              images={project.images}
              tools={project.tools}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
