import { TimelineItem } from "../components";
import { Jobs } from "../assets/data/jobs.js";

const Experience = () => {
  return (
    <div className="w-full flex flex-col items-center justify-evenly">
      <h1 id="Experience" className="text-xl font-bold text-white text-center">
        Work Experience
      </h1>
      <ul className="text-sm timeline timeline-snap-icon max-md:timeline-compact timeline-vertical sm:hidden">
        {Jobs.map((job, index) => {
          return (
            <TimelineItem
              key={index}
              title={job.title}
              company={job.company}
              desc={job.desc}
              date={job.date}
              position={index % 2 === 0 ? "start" : "end"}
            />
          );
        })}
      </ul>
      <div className="hidden md:flex md:flex-col md:w-1/2">
        {Jobs.map((job, index) => {
          return (
            <TimelineItem
              key={index}
              title={job.title}
              company={job.company}
              desc={job.desc}
              date={job.date}
              position={index % 2 === 0 ? "start" : "end"}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
