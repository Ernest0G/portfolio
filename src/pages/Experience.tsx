import { TimelineItem } from "../components";
import { Jobs } from "../assets/data/jobs.ts";
import { JobType } from "../types/jobType.ts";

const Experience = () => {
  return (
    <div className="w-full flex flex-col items-center justify-evenly">
      <h1 id="Experience" className="text-xl sm:text-4xl font-bold text-white text-center">
        Work Experience
      </h1>
      <ul className="text-sm timeline timeline-snap-icon max-md:timeline-compact timeline-vertical sm:hidden">
        {Jobs.map((job: JobType, index: number) => {
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
      <div className="hidden sm:flex sm:flex-col sm:w-1/2 md:w-11/12 lg:w-1/2">
        {Jobs.map((job: JobType, index: number) => {
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
