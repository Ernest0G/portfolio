import { CiCalendarDate } from "react-icons/ci";

const TimelineItem = ({ title, company, desc, date, position }) => {
  return (
    <li>
      <div className="timeline-middle sm:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className={`${position === "start" ? "timeline-start" : "timeline-end"} sm:text-start`}>
        <time className="md:flex align-middle items-center gap-1 font-mono italic text-white sm:text-left md:text-2xl lg:text-xl">
          <CiCalendarDate /> {date}
        </time>
        <div className="collapse collapse-arrow">
          <input type="checkbox" />
          <div className="collapse-title sm:p-0 text-xl md:text-3xl lg:text-2xl font-medium text-white">{title}</div>
          <div className="collapse-content text-white">
            <div className="card w-full shadow-lg">
              <div className="card-body bg-black rounded-lg md:text-xl">
                <span className="card-title text-lg sm:text-start md:text-2xl lg:text-xl">{company}</span>
                <p>{desc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />
    </li>
  );
};

export default TimelineItem;
