import ExperienceCard from "../ExperienceCard/ExperienceCard.jsx";
import "./Experience.css";

const Experience = () => {
  const jobDetails = {
    title: "Software Developer Intern",
    company: "Bay Valley Tech",
    dates: "April 2023 - September 2023",
    details: "Coded",
  };
  return (
    <section id="experience-section">
      <ExperienceCard job={jobDetails} />
      <ExperienceCard job={jobDetails} />
      <ExperienceCard job={jobDetails} />
      <ExperienceCard job={jobDetails} />
      <ExperienceCard job={jobDetails} />
    </section>
  );
};

export default Experience;
