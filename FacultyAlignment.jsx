import React, { useState } from "react";

const FacultyAlignment = ({ courses, assignFaculty }) => {
  const [courseId, setCourseId] = useState("");
  const [faculty, setFaculty] = useState("");

  return (
    <div className="box">
      <h2>Faculty Alignment</h2>

      <select onChange={(e) => setCourseId(Number(e.target.value))}>
        <option>Select Course</option>
        {courses.map((c) => (
          <option key={c.id} value={c.id}>{c.name}</option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Faculty Name"
        onChange={(e) => setFaculty(e.target.value)}
      />

      <button onClick={() => assignFaculty(courseId, faculty)}>
        Assign Faculty
      </button>
    </div>
  );
};

export default FacultyAlignment;