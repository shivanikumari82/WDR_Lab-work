import React, { useState } from "react";

const CourseRegistration = () => {
  const [course, setCourse] = useState({
    courseId: "",
    courseName: "",
    description: "",
    duration: "",
    minEnrollment: "",
    maxEnrollment: "",
    createdAt: "",
    updatedAt: "",
  });

  const handleChange = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Course Registered:", course);

    alert("Course Registered Successfully!");

    setCourse({
      courseId: "",
      courseName: "",
      description: "",
      duration: "",
      minEnrollment: "",
      maxEnrollment: "",
      createdAt: "",
      updatedAt: "",
    });
  };

  return (
    <div className="box">
      <h2>Course Registration</h2>

      <form onSubmit={handleSubmit}>
        
        <label>Course ID</label>
        <input
          type="text"
          name="courseId"
          value={course.courseId}
          onChange={handleChange}
          placeholder="Enter Course ID"
        />

        <label>Course Name</label>
        <input
          type="text"
          name="courseName"
          value={course.courseName}
          onChange={handleChange}
          placeholder="Enter Course Name"
        />

        <label>Description</label>
        <textarea
          name="description"
          value={course.description}
          onChange={handleChange}
          placeholder="Enter Description"
          style={{ width: "100%", padding: "10px", borderRadius: "6px", border: "1px solid #aaa" }}
        />

        <label>Duration</label>
        <input
          type="text"
          name="duration"
          value={course.duration}
          onChange={handleChange}
          placeholder="Ex: 3 hrs"
        />

        <label>Minimum Enrollment</label>
        <input
          type="number"
          name="minEnrollment"
          value={course.minEnrollment}
          onChange={handleChange}
          placeholder="Minimum Students"
        />

        <label>Maximum Enrollment</label>
        <input
          type="number"
          name="maxEnrollment"
          value={course.maxEnrollment}
          onChange={handleChange}
          placeholder="Maximum Students"
        />

        <label>Created At</label>
        <input
          type="date"
          name="createdAt"
          value={course.createdAt}
          onChange={handleChange}
        />

        <label>Updated At</label>
        <input
          type="date"
          name="updatedAt"
          value={course.updatedAt}
          onChange={handleChange}
        />

        <button type="submit">Register Course</button>
        <br />
        <br />
        <button type="home">Back to Page</button>
      </form>
    </div>
  );
};

export default CourseRegistration;
