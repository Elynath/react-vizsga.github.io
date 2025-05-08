import { useNavigate } from "react-router-dom";
import { useTasks } from "../context/TaskContext";
import TaskForm from "../components/TaskForm";

const NewTask = () => {
  const { dispatch } = useTasks();
  const navigate = useNavigate();

  const handleAddTask = (title) => {
    fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, completed: false }),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "ADD_TASK", payload: { id: Date.now(), title: data.title } });
        navigate("/");
      });
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Új feladat</h2>
      <TaskForm onSubmit={handleAddTask} />
    </div>
  );
};

export default NewTask;