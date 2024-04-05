const ProjectItem = ({ title, desc, live, git, index, images, tools }) => {
  return (
    <div id={`item${index}`} className="carousel-item w-full sm:justify-center">
      <div className="card w-full text-white sm:items-center">
        <div className="card-body sm:w-11/12 bg-black sm:rounded-xl items-center">
          <span className="card-title text-xl sm:text-2xl">{title}</span>
          <div className="collapse collapse-arrow">
            <input type="checkbox" />
            <div className="collapse-title text-lg sm:text-2xl font-medium text-white">Description</div>
            <div className="collapse-content">
              <span className="text-white">
                <div className="card w-full shadow-lg">
                  <div className="card-body p-2 bg-black rounded-lg sm:text-xl md:text-xl lg:text2xl">
                    <p>{desc}</p>
                  </div>
                </div>
              </span>
            </div>
          </div>
          <div className="collapse collapse-arrow">
            <input type="checkbox" />
            <div className="collapse-title text-lg sm:text-2xl font-medium text-white">Images</div>
            <div className="collapse-content">
              <span className="text-white">
                <div className="card w-full shadow-lg">
                  <div className="card-body p-2 bg-black rounded-lg">
                    {images && (
                      <div className="carousel flex justify-center align-middle w-full">
                        <div className="h-96 carousel carousel-vertical">
                          {images?.map((image, index) => {
                            return (
                              <div key={index} className="carousel-item h-full">
                                <img src={image} />
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </span>
            </div>
          </div>
          <div className="collapse collapse-arrow">
            <input type="checkbox" />
            <div className="collapse-title text-lg sm:text-2xl font-medium text-white">Tools Used</div>
            <div className="collapse-content">
              <div className="card w-full shadow-lg">
                <div className="card-body w-full flex-row flex-wrap justify-evenly p-2 bg-black rounded-lg">
                  {tools?.map((tool, index) => {
                    return (
                      <span className="badge text-white sm:text-xl" key={index}>
                        {tool}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-row justify-evenly sm:text-xl md:text-lg">
            {live && (
              <button className="bg-primary w-1/4 p-1 font-bold">
                <a href={live} target="#">
                  Visit
                </a>
              </button>
            )}
            {git && (
              <button className="bg-primary w-1/4 p-1 font-bold">
                <a href={git} target="#">
                  Source
                </a>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
