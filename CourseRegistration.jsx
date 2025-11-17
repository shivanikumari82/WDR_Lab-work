import React, { useState } from "react";

const CourseRegistration = ({ addCourse }) => {
  const [name, setName] = useState("");
  const [duration, setDuration] = useState("");

  const submit = (e) => {
    e.preventDefault();
    addCourse({ name, duration });
    setName("");
    setDuration("");
  };

  return (
    <div className="box">
      <h2>Course Registration</h2>

      <form onSubmit={submit}>
        <input
          type="text"
          placeholder="Course Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Duration"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          required
        />

        <button type="submit">Add Course</button>
      </form>
    </div>
  );
};

export default CourseRegistration;
