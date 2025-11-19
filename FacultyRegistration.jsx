// src/components/FacultyRegistration.jsx
import { useForm } from "react-hook-form";

export default function FacultyRegistration({ addFaculty }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    addFaculty(data);
    alert("Faculty Registered!");
    reset();
  };

  return (
    <div>
      <h2>Faculty Registration</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* ID */}
        <label>Faculty ID</label>
        <input
          {...register("facultyId", { required: "ID is required" })}
        />
        <p>{errors.facultyId?.message}</p>

        {/* Name */}
        <label>Name</label>
        <input
          {...register("facultyName", {
            required: "Name required",
            minLength: { value: 3, message: "Min 3 characters" },
          })}
        />
        <p>{errors.facultyName?.message}</p>

        {/* Age */}
        <label>Age</label>
        <input
          type="number"
          {...register("age", {
            required: "Age required",
            min: { value: 21, message: "Min age 21" },
          })}
        />
        <p>{errors.age?.message}</p>

        {/* Qualification */}
        <label>Qualification</label>
        <input
          {...register("qualification", {
            required: "Qualification required",
          })}
        />
        <p>{errors.qualification?.message}</p>

        {/* Joined Date */}
        <label>Joined Date</label>
        <input
          type="date"
          {...register("joinedDate", { required: "Date required" })}
        />
        <p>{errors.joinedDate?.message}</p>

        {/* Status */}
        <label>Status</label>
        <select
          {...register("status", { required: "Status required" })}
        >
          <option value="">Select</option>
          <option value="active">Active</option>
          <option value="left">Left</option>
        </select>
        <p>{errors.status?.message}</p>

        <button type="submit">Register</button>
        <br />
        <br />
        <button type="submit">Back to Page</button>
      </form>
    </div>
  );
}