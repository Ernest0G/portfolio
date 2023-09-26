import ExperienceCard from "../ExperienceCard/ExperienceCard.jsx";
import "./Experience.css";

const Experience = () => {
  const jobDetails = {
    experienceName: "Software Developer Intern",
    experienceDate: "April 2023 - September 2023",
    experienceDetails: "Coded",
  };
  return (
    <section id="experience-section">
      <ExperienceCard job={jobDetails} />
    </section>
  );
};

export default Experience;
