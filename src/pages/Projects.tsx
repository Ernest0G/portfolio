import { ProjectItem } from "../components";
import { ProjectsList } from "../assets/data/projects.js";

const Projects = () => {
  return (
    <div className="w-full sm:flex sm:flex-col sm:justify-center items-center">
      <h1 id="Projects" className="text-xl sm:text-4xl font-bold bg-accent text-white text-center">
        Projects
      </h1>
      <p className="sm:hidden text-center text-white">Swipe to see more projects</p>
      <br className="hidden sm:flex"></br>
      <div className="carousel w-full sm:grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 sm:gap-y-10">
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
              tools={project.tools}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
