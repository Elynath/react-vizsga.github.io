import { useRef } from "react";



const TaskForm = ({ onSubmit }) => {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = inputRef.current.value.trim();
    if (!title) return;
    onSubmit(title);
    inputRef.current.value = "";
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <input
        ref={inputRef}
        className="border p-2 w-full"
        placeholder="Feladat címe..."
      />
      <button className="bg-blue-500 text-white p-2 rounded w-full">
        Hozzáadás
      </button>
    </form>
  );
};

export default TaskForm;