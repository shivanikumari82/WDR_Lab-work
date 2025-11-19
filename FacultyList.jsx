// src/components/FacultyList.jsx
export default function FacultyList({ facultyList, onSelect }) {
  return (
    <div>
      <h2>Faculty List</h2>

      {facultyList.length === 0 ? (
        <p>No faculty registered.</p>
      ) : (
        <ul>
          {facultyList.map((f) => (
            <li key={f.facultyId}>
              {f.facultyName} — {f.qualification}
              <button onClick={() => onSelect(f)}>View</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}