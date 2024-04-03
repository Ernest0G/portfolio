const ProjectItem = ({ title, desc, live, git, index, images }) => {
  return (
    <div id={`item${index + 1}`} className="carousel-item w-full">
      <div className="card w-full text-white">
        <div className="card-body bg-black">
          <span className="card-title text-lg">{title}</span>
          <div className="collapse collapse-arrow">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium text-white">Description</div>
            <div className="collapse-content">
              <span className="text-white">
                <div className="card w-full shadow-lg">
                  <div className="card-body p-2 bg-black rounded-lg">
                    <p>{desc}</p>
                  </div>
                </div>
              </span>
            </div>
          </div>
          <div className="collapse collapse-arrow">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium text-white">Images</div>
            <div className="collapse-content">
              <span className="text-white">
                <div className="card w-full shadow-lg">
                  <div className="card-body p-2 bg-black rounded-lg">
                    <div className="carousel w-full sm:grid sm:w-1/2">
                      {images?.map((image, index) => {
                        return <img key={index} src={image} alt="project" className="w-1/2" />;
                      })}
                    </div>
                  </div>
                </div>
              </span>
            </div>
          </div>
          <div className="collapse collapse-arrow">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium text-white">Tools Used</div>
            <div className="collapse-content">
              <span className="text-white">
                <div className="card w-full shadow-lg">
                  <div className="card-body p-2 bg-black rounded-lg">
                    <p>Tools</p>
                  </div>
                </div>
              </span>
            </div>
          </div>
          <div className="w-full flex flex-row justify-evenly">
            {live && (
              <button className="bg-primary w-1/4 p-1 font-bold">
                <a href={live}>Visit Site</a>
              </button>
            )}
            {git && (
              <button className="bg-primary w-1/4 p-1 font-bold">
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
