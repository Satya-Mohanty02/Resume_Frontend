import { useNavigate } from "react-router-dom";

const JobForm = () => {
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/upload");
  };

  return (
    <form onSubmit={submitHandler} className="space-y-4">
      <input
        type="text"
        placeholder="Job Role"
        className="w-full p-2 border rounded"
        required
      />
      <textarea
        placeholder="Required Skills"
        className="w-full p-2 border rounded"
        required
      ></textarea>
      <button className="w-full bg-blue-600 text-white p-2 rounded">
        Next
      </button>
    </form>
  );
};

export default JobForm;