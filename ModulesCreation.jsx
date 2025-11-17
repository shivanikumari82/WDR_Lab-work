import React, { useState } from "react";

const ModulesCreation = ({ courses, addModule }) => {
  const [courseId, setCourseId] = useState("");
  const [moduleName, setModuleName] = useState("");

  return (
    <div className="box">
      <h2>Modules Creation</h2>

      <select onChange={(e) => setCourseId(Number(e.target.value))}>
        <option>Select Course</option>
        {courses.map((c) => (
          <option key={c.id} value={c.id}>{c.name}</option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Module Name"
        onChange={(e) => setModuleName(e.target.value)}
      />

      <button onClick={() => addModule(courseId, moduleName)}>
        Add Module
      </button>
    </div>
  );
};

export default ModulesCreation;