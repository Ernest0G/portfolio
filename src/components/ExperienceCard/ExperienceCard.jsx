import "./ExperienceCard.css";

const ExperienceCard = (props) => {
  const experienceDetails = props.job.details;
  return (
    <div className="experience-card-container">
      <section className="experience-heading">
        <h3>
          {props.job.title} - {props.job.company}
        </h3>
        <h4>{props.job.dates}</h4>
      </section>

      <p className="experience-details">{experienceDetails}</p>
    </div>
  );
};

export default ExperienceCard;
