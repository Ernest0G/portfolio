import "./About.css";

const About = () => {
  return (
    <section id="about-section">
      <p className="about-paragraph">
        Hello, my name is <span className="blue-text">Ernesto Gutierrez</span>. I received my B.S. in Computer Science &
        Engineering from UC Merced in 2021. Currently I am a Programmer Analyst I for Merced County.
      </p>
      <button id="resume-button">View Resume</button>
    </section>
  );
};

export default About;
