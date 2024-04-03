import { TimelineItem } from "../components";
import { Jobs } from "../assets/jobs.js";

const Experience = () => {
  return (
    <div className="w-full flex flex-col items-center justify-evenly">
      <h1 id="Experience" className="text-xl font-bold text-white text-center">
        Experience
      </h1>
      <ul className="text-sm timeline timeline-snap-icon max-md:timeline-compact timeline-vertical sm:text-xl">
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
    </div>
  );
};

export default Experience;
