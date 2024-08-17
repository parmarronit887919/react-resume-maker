import { useState } from "react";
import { PersonalInfo } from "./personal-info";
import { ExperienceInfo } from "./experience-info";
import { EducationInfo } from "./education-info";
import { ResumeTemplate } from "./resume-template";
import "../styles/resume-builder.css";

function ResumeBuilder() {
  const [isVisible, setVisibility] = useState(false);

  const toggleVisibility = () => {
    setVisibility(!isVisible);
  };

  const [personalInfo, setPersonalInfo] = useState({
    FirstNamevalue: "Ronit",
    LastNamevalue: "Parmar",
    Positionvalue: "Web Developer",
    gmail: "ronitparmar15@gmail.com",
    contactNumber: 8879198460,
    linkedIn: "None",
    website: "somewhereOnInternet.com",
  });

  const [experienceInfo, setExperienceInfo] = useState({
    companyName: "Resume Maker",
    positionName: "Student",
    jobDesc: "Learning",
    startDate: "12-4-2023",
    endDate: "23-7-2025",
  });

  const [educationInfo, setEducationInfo] = useState({
    collegeName: "Nagindas Khandwala",
    courseName: "Bsc Computer Science",
    startDate: "12-4-2023",
    endDate: "23-7-2025",
  });

  return (
    <div className="container">
      <button onClick={toggleVisibility} className="generateCV">
        Generate CV
      </button>
      <div
        className="subcontainerOne"
        style={{ display: isVisible ? "none" : "flex" }}
      >
        <PersonalInfo
          setPersonalInfo={setPersonalInfo}
          personalInfo={personalInfo}
        />
        <ExperienceInfo
          setExperienceInfo={setExperienceInfo}
          experienceInfo={experienceInfo}
        />
        <EducationInfo
          setEducationInfo={setEducationInfo}
          educationInfo={educationInfo}
        />
      </div>
      <div
        className="subcontaineTwo"
        style={{ display: isVisible ? "flex" : "none" }}
      >
        <ResumeTemplate
          personalInfo={personalInfo}
          experienceInfo={experienceInfo}
          educationInfo={educationInfo}
        />
      </div>
    </div>
  );
}

export default ResumeBuilder;
