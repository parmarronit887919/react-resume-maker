import PropTypes from "prop-types";
import "../styles/resume-template.css";

function ResumeTemplate({ personalInfo, experienceInfo, educationInfo }) {
  return (
    <div className="resume-template">
      <div className="header">
        <p className="name">
          {personalInfo.FirstNamevalue} {personalInfo.LastNamevalue}
        </p>
        <p className="position">{personalInfo.Positionvalue}</p>
      </div>

      <div className="holder">
        <div className="experience">
          <h3>Experience</h3>
          <p>
            <div className="questions">Company: </div>
            <div className="answers">{experienceInfo.companyName}</div>
          </p>
          <p>
            <div className="questions">Position: </div>
            <div className="answers">{experienceInfo.positionName}</div>
          </p>
          <p>
            <div className="questions">Description: </div>
            <div className="answers">{experienceInfo.jobDesc}</div>
          </p>
          <p>
            <div className="questions">Start Date: </div>
            <div className="answers">{experienceInfo.startDate}</div>
          </p>
          <p>
            <div className="questions">End Date: </div>
            <div className="answers">{experienceInfo.endDate}</div>
          </p>
        </div>

        <div className="subHolder">
          <div className="education">
            <h3>Education</h3>
            <p>
              <div className="questions">College: </div>
              <div className="answers">{educationInfo.collegeName}</div>
            </p>
            <p>
              <div className="questions">Course: </div>
              <div className="answers">{educationInfo.courseName}</div>
            </p>
            <p>
              <div className="questions">Start Date: </div>
              <div className="answers">{educationInfo.startDate}</div>
            </p>
            <p>
              <div className="questions">End Date: </div>
              <div className="answers">{educationInfo.endDate}</div>
            </p>
          </div>

          <div className="contactDetails">
            <h3>Contact Details</h3>
            <p>
              <div className="questions">Email: </div>
              <div className="answers">{personalInfo.gmail}</div>
            </p>
            <p>
              <div className="questions"> Number: </div>
              <div className="answers">{personalInfo.contactNumber}</div>
            </p>
            <p>
              <div className="questions">LinkedIn: </div>
              <div className="answers">{personalInfo.linkedIn}</div>
            </p>
            <p>
              <div className="questions">Website: </div>
              <div className="answers">{personalInfo.website}</div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

ResumeTemplate.propTypes = {
  personalInfo: PropTypes.shape({
    FirstNamevalue: PropTypes.string.isRequired,
    LastNamevalue: PropTypes.string.isRequired,
    Positionvalue: PropTypes.string.isRequired,
    gmail: PropTypes.string.isRequired,
    contactNumber: PropTypes.number.isRequired,
    linkedIn: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
  }).isRequired,
  experienceInfo: PropTypes.shape({
    companyName: PropTypes.string.isRequired,
    positionName: PropTypes.string.isRequired,
    jobDesc: PropTypes.string.isRequired,
    startDate: PropTypes.instanceOf(Date).isRequired,
    endDate: PropTypes.instanceOf(Date).isRequired,
  }).isRequired,
  educationInfo: PropTypes.shape({
    collegeName: PropTypes.string.isRequired,
    courseName: PropTypes.string.isRequired,
    startDate: PropTypes.instanceOf(Date).isRequired,
    endDate: PropTypes.instanceOf(Date).isRequired,
  }).isRequired,
};

export { ResumeTemplate };
