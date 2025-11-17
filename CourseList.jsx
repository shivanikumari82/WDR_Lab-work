import React from "react";

const CourseList = ({ courses, viewDetails }) => {
  return (
    <div className="box">
      <h2>Course List</h2>

      {courses.map((c) => (
        <div key={c.id} className="list-item">
          <span>{c.name}</span>
          <button onClick={() => viewDetails(c)}>Details</button>
        </div>
      ))}
    </div>
  );
};

export default CourseList;
