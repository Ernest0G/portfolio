import ExperienceCard from "../ExperienceCard/ExperienceCard.jsx";
import "./Experience.css";

const Experience = () => {
  const jobDetails = {
    title: "Software Developer Intern",
    company: "Bay Valley Tech",
    dates: "Apr 2023 - Sep 2023",
    details: `I worked in a team of six where we developed applications from the ground up. 
    I was able to improve my technical skills and my ability to collaborate efficiently on a project. Through the projects, I 
    gained a better understanding of technologies such as GitHub, React, and web development in general.`,
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
