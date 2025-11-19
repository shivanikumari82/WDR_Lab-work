// src/components/FacultyProfile.jsx
export default function FacultyProfile({ faculty }) {
  return (
    <div>
      <h1>Faculty Profile</h1>
      <br />
      <p><strong>ID:</strong> {faculty.facultyId}</p>
      <br />
      <p><strong>Name:</strong> {faculty.facultyName}</p>
      <br />
      <p><strong>Age:</strong> {faculty.age}</p>
      <br />
      <p><strong>Qualification:</strong> {faculty.qualification}</p>
      <br />
      <p><strong>Joined:</strong> {faculty.joinedDate}</p>
      <br />
      <p><strong>Status:</strong> {faculty.status}</p>
    </div>
  );
}