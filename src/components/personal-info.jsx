import { useState } from "react";
import PropTypes from "prop-types";
import "../styles/general-info.css";

function PersonalInfo(props) {
  const { personalInfo, setPersonalInfo } = props;
  const [isVisible, setVisibility] = useState(false);

  const toggleVisibility = () => {
    setVisibility(!isVisible);
  };

  const handleChange = (e) => {
    setPersonalInfo({ ...personalInfo, [e.target.name]: e.target.value });
  };

  return (
    <>
      <button onClick={toggleVisibility}>Personal Info</button>
      <div
        className="personalInfo"
        style={{ display: isVisible ? "block" : "none" }}
      >
        <div className="inputContainer">
          <p>First Name:</p>
          <input
            type="text"
            name="FirstNamevalue"
            value={personalInfo.FirstNamevalue}
            onChange={handleChange}
          />
        </div>
        <div className="inputContainer">
          <p>Last Name:</p>
          <input
            type="text"
            name="LastNamevalue"
            value={personalInfo.LastNamevalue}
            onChange={handleChange}
          />
        </div>
        <div className="inputContainer">
          <p>Position:</p>
          <input
            type="text"
            name="Positionvalue"
            value={personalInfo.Positionvalue}
            onChange={handleChange}
          />
        </div>
        <div className="inputContainer">
          <p>Gmail:</p>
          <input
            type="email"
            name="gmail"
            value={personalInfo.gmail}
            onChange={handleChange}
          />
        </div>
        <div className="inputContainer">
          <p>Contact Number:</p>
          <input
            type="number"
            name="contactNumber"
            value={personalInfo.contactNumber}
            onChange={handleChange}
          />
        </div>
        <div className="inputContainer">
          <p>Linked-In:</p>
          <input
            type="text"
            name="linkedIn"
            value={personalInfo.linkedIn}
            onChange={handleChange}
          />
        </div>
        <div className="inputContainer">
          <p>Website:</p>
          <input
            type="text"
            name="website"
            value={personalInfo.website}
            onChange={handleChange}
          />
        </div>
      </div>
    </>
  );
}

PersonalInfo.propTypes = {
  personalInfo: PropTypes.shape({
    FirstNamevalue: PropTypes.string.isRequired,
    LastNamevalue: PropTypes.string.isRequired,
    Positionvalue: PropTypes.string.isRequired,
    gmail: PropTypes.string.isRequired,
    contactNumber: PropTypes.number.isRequired,
    linkedIn: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
  }).isRequired,
  setPersonalInfo: PropTypes.func.isRequired,
};

export { PersonalInfo };
