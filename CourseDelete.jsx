import React from "react";

const CourseDelete = ({ courses, deleteCourse }) => {
  return (
    <div className="box">
      <h2>Delete Course</h2>

      {courses.map((c) => (
        <div key={c.id} className="list-item">
          {c.name}
          <button className="delete-btn" onClick={() => deleteCourse(c.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default CourseDelete;
