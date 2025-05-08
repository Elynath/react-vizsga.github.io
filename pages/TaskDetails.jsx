import { useParams } from "react-router-dom";
import { useTasks } from "../context/TaskContext";

const TaskDetails = () => {
  const { id } = useParams();
  const { state } = useTasks();
  const task = state.tasks.find(t => t.id === parseInt(id));

  if (!task) return <p>Feladat nem található</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">{task.title}</h2>
      <p>ID: {task.id}</p>
    </div>
  );
};

export default TaskDetails;