import "./Experience.css";
import CountUp from "react-countup";

const Experience = () => {
  return (
    <>
      <div className="experience" id="Experience">
        <div className="achievement">
          <span className="circle">
            <CountUp delay={4} end={2} className="circle" />+
          </span>
          <span>years</span>
          <span>experience</span>
        </div>
        <div className="achievement">
        <span className="circle">
            <CountUp delay={3} end={40} className="circle" />+
          </span>
          <span>Completed</span>
          <span>Projects</span>
        </div>
        <div className="achievement">
          <span className="circle">
            <CountUp delay={3} end={30} className="circle" />+
          </span>
          <span>happy</span>
          <span>customers</span>
        </div>
      </div>
    </>
  );
};

export default Experience;
