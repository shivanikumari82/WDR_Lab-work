// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./facultymanagement/FacultyNavBar";
import FacultyRegistration from "./facultymanagement/FacultyRegistration";
import FacultyList from "./facultymanagement/FacultyList";
import FacultyProfile from "./facultymanagement/FacultyProfile";
import FacultyUpdate from "./facultymanagement/FacultyUpdate";

export default function App() {
  const [facultyList, setFacultyList] = useState([]);
  const [selectedFaculty, setSelectedFaculty] = useState(null);

  const addFaculty = (faculty) => {
    setFacultyList([...facultyList, faculty]);
  };

  const updateFaculty = (updated) => {
    setFacultyList(
      facultyList.map((f) =>
        f.facultyId === updated.facultyId ? updated : f
      )
    );
  };

  return (
    <BrowserRouter>
      <Navbar />

      <div style={{ padding: 20 }}>
        <Routes>
          <Route path="/" element={<FacultyRegistration addFaculty={addFaculty} />} />

          <Route
            path="/list"
            element={<FacultyList facultyList={facultyList} onSelect={setSelectedFaculty} />}
          />

          <Route
            path="/profile"
            element={
              selectedFaculty ? (
                <FacultyProfile faculty={selectedFaculty} />
              ) : (
                <p>No faculty selected</p>
              )
            }
          />

          <Route
            path="/update"
            element={
              selectedFaculty ? (
                <FacultyUpdate faculty={selectedFaculty} updateFaculty={updateFaculty} />
              ) : (
                <p>No faculty selected</p>
              )
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}