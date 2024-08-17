import { useState } from "react";
import PropTypes from "prop-types";
import "../styles/education-info.css";

function EducationInfo({ educationInfo, setEducationInfo }) {
  const [isVisible, setVisibility] = useState(false);

  const toggleVisibility = () => {
    setVisibility(!isVisible);
  };

  const handleChange = (e) => {
    setEducationInfo({ ...educationInfo, [e.target.name]: e.target.value });
  };

  return (
    <>
      <button onClick={toggleVisibility}>Education</button>
      <div
        className="eduationInfo"
        style={{ display: isVisible ? "block" : "none" }}
      >
        <div className="inputContainer">
          <p>College Name:</p>
          <input
            type="text"
            name="collegeName"
            value={educationInfo.collegeName}
            onChange={handleChange}
          />
        </div>
        <div className="inputContainer">
          <p>Course/Degree:</p>
          <input
            type="text"
            name="courseName"
            value={educationInfo.courseName}
            onChange={handleChange}
          />
        </div>
        <div className="inputContainer">
          <p>Start Date:</p>
          <input
            type="date"
            name="startDate"
            value={educationInfo.startDate}
            onChange={handleChange}
          />
        </div>
        <div className="inputContainer">
          <p>End Date:</p>
          <input
            type="date"
            name="endDate"
            value={educationInfo.endDate}
            onChange={handleChange}
          />
        </div>
      </div>
    </>
  );
}

EducationInfo.propTypes = {
  educationInfo: PropTypes.shape({
    collegeName: PropTypes.string.isRequired,
    courseName: PropTypes.string.isRequired,
    startDate: PropTypes.instanceOf(Date).isRequired,
    endDate: PropTypes.instanceOf(Date).isRequired,
  }).isRequired,
  setEducationInfo: PropTypes.func.isRequired,
};

export { EducationInfo };
