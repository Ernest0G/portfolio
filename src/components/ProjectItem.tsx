const ProjectItem = ({
  title,
  desc,
  live,
  git,
  index,
  images,
  tools,
}: {
  title: string;
  desc: string;
  live: string;
  git: string;
  index: number;
  images: string[];
  tools: string[];
}) => {
  return (
    <div id={`item${index}`} className="w-full carousel-item sm:justify-center">
      <div className="w-full text-white card sm:items-center">
        <div className="items-center bg-black card-body sm:w-11/12 sm:rounded-xl">
          <span className="text-xl card-title sm:text-2xl">{title}</span>
          <div className="collapse collapse-arrow">
            <input type="checkbox" />
            <div className="text-lg font-medium text-white collapse-title sm:text-2xl">Description</div>
            <div className="collapse-content">
              <span className="text-white">
                <div className="w-full shadow-lg card">
                  <div className="p-2 bg-black rounded-lg card-body sm:text-xl md:text-xl lg:text2xl">
                    <p>{desc}</p>
                  </div>
                </div>
              </span>
            </div>
          </div>
          <div className="collapse collapse-arrow">
            <input type="checkbox" />
            <div className="text-lg font-medium text-white collapse-title sm:text-2xl">Images</div>
            <div className="collapse-content">
              <span className="text-white">
                <div className="w-full shadow-lg card">
                  <div className="p-2 bg-black rounded-lg card-body">
                    {images.length > 0 && (
                      <div className="flex justify-center w-full align-middle carousel">
                        <div className="h-96 carousel carousel-vertical">
                          {images?.map((image, index) => {
                            return (
                              <div key={index} className="h-full carousel-item">
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
            <div className="text-lg font-medium text-white collapse-title sm:text-2xl">Tools Used</div>
            <div className="collapse-content">
              <div className="w-full shadow-lg card">
                <div className="flex-row flex-wrap w-full p-2 bg-black rounded-lg card-body justify-evenly">
                  {tools?.map((tool, index) => {
                    return (
                      <span className="text-white badge sm:text-xl" key={index}>
                        {tool}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row w-full justify-evenly sm:text-xl md:text-lg">
            {live && (
              <button className="w-1/4 p-1 font-bold bg-primary">
                <a href={live} target="#">
                  Visit
                </a>
              </button>
            )}
            {git && (
              <button className="w-1/4 p-1 font-bold bg-primary">
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
