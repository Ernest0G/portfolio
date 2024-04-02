const ProjectItem = ({ title, desc, live, git, index, images }) => {
  return (
    <div id={`item${index + 1}`} className="carousel-item w-full">
      <div className="card w-full text-white">
        <div className="card-body bg-black">
          <span className="card-title text-lg">{title}</span>
          <p>{desc}</p>
          <div className="w-full flex flex-row justify-evenly">
            {live && (
              <button className="bg-primary w-1/4">
                <a href={live}>Visit Site</a>
              </button>
            )}
            {images && <button className="bg-primary w-1/4">Images</button>}
            {git && (
              <button className="bg-primary w-1/4">
                <a href={git}>Source</a>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
