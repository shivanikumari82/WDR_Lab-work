// src/components/FacultyUpdate.jsx
import { useForm } from "react-hook-form";

export default function FacultyUpdate({ faculty, updateFaculty }) {
  const { register, handleSubmit } = useForm({ defaultValues: faculty });

  const onSubmit = (data) => {
    updateFaculty(data);
    alert("Faculty Updated!");
  };

  return (
    <div>
      <h2>Update Faculty</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <input {...register("facultyName")} />

        <label>Age</label>
        <input type="number" {...register("age")} />

        <label>Qualification</label>
        <input {...register("qualification")} />

        <label>Joined Date</label>
        <input type="date" {...register("joinedDate")} />

        <label>Status</label>
        <select {...register("status")}>
          <option value="active">Active</option>
          <option value="left">Left</option>
        </select>

        <button type="submit">Update</button>
      </form>
    </div>
  );
}