import { useState } from "react";
import PropTypes from "prop-types";
import "../styles/experience-info.css";

function ExperienceInfo({ experienceInfo, setExperienceInfo }) {
  const [isVisible, setVisibility] = useState(false);

  const toggleVisibility = () => {
    setVisibility(!isVisible);
  };

  const handleChange = (e) => {
    setExperienceInfo({ ...experienceInfo, [e.target.name]: e.target.value });
  };

  return (
    <>
      <button onClick={toggleVisibility}>Experience</button>
      <div
        className="experienceInfo"
        style={{ display: isVisible ? "block" : "none" }}
      >
        <div className="inputContainer">
          <p>Company/Project Name:</p>
          <input
            type="text"
            name="companyName"
            value={experienceInfo.companyName}
            onChange={handleChange}
          />
        </div>
        <div className="inputContainer">
          <p>Position:</p>
          <input
            type="text"
            name="positionName"
            value={experienceInfo.positionName}
            onChange={handleChange}
          />
        </div>
        <div className="inputContainer">
          <p>Job/Project Description:</p>
          <input
            type="text"
            name="jobDesc"
            value={experienceInfo.jobDesc}
            onChange={handleChange}
          />
        </div>
        <div className="inputContainer">
          <p>Start Date:</p>
          <input
            type="date"
            name="startDate"
            value={experienceInfo.startDate}
            onChange={handleChange}
          />
        </div>
        <div className="inputContainer">
          <p>End Date:</p>
          <input
            type="date"
            name="endDate"
            value={experienceInfo.endDate}
            onChange={handleChange}
          />
        </div>
      </div>
    </>
  );
}

ExperienceInfo.propTypes = {
  experienceInfo: PropTypes.shape({
    companyName: PropTypes.string.isRequired,
    positionName: PropTypes.string.isRequired,
    jobDesc: PropTypes.string.isRequired,
    startDate: PropTypes.instanceOf(Date).isRequired,
    endDate: PropTypes.instanceOf(Date).isRequired,
  }).isRequired,
  setExperienceInfo: PropTypes.func.isRequired,
};

export { ExperienceInfo };
