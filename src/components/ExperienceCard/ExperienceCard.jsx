import "./ExperienceCard.css";

const ExperienceCard = ({ props }) => {
  const experienceDetails = props.job.experienceDetails;
  return (
    <div>
      <h3>{props.job.experienceName}</h3>
      <h4>{props.job.experienceDate}</h4>
      <p>{experienceDetails}</p>
    </div>
  );
};

export default ExperienceCard;
