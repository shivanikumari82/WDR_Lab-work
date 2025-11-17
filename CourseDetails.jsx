import React from "react";

const CourseDetails = ({ selectedCourse }) => {
  if (!selectedCourse)
    return (
      <div className="box">
        <h2>Course Details</h2>
        <p>No course selected.</p>
      </div>
    );

  return (
    <div className="box">
      <h2>Course Details</h2>
      <p><strong>Name:</strong> {selectedCourse.name}</p>
      <p><strong>Duration:</strong> {selectedCourse.duration}</p>
      <p><strong>Modules:</strong> {selectedCourse.modules.join(", ")}</p>
      <p><strong>Faculty:</strong> {selectedCourse.faculty || "Not Assigned"}</p>
    </div>
  );
};

export default CourseDetails;
