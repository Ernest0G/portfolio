const About = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center bg-accent">
      <h1 id="About" className="text-xl sm:text-3xl font-bold text-white text-center">
        About Me
      </h1>
      <br></br>
      <div className="card w-11/12 shadow-md sm:w-2/5">
        <div className="card-body p-5 sm:p-10 bg-black rounded-md sm:rounded-xl">
          <p className="text-white sm:text-3xl">
            Hi, I'm Ernesto! I'm a passionate software developer with experience in web development. I love creating
            user-friendly and efficient applications using modern technologies. In my free time, I enjoy exploring new
            programming languages and frameworks. Feel free to reach out to me if you have any questions or
            collaboration opportunities!
          </p>
        </div>
      </div>
      <br></br>
      <div className="w-full flex flex-col items-center justify-center">
        <button className="w-2/5 sm:w-1/4 p-1 shadow-md font-bold bg-primary text-white">Resume</button>
      </div>
    </div>
  );
};

export default About;
