import ReactDOM from "react-dom";
import { useTasks } from "../context/TaskContext";

const Modal = () => {
  const { modalTaskId, deleteTask, setModalTaskId } = useTasks();

  if (modalTaskId === null) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded shadow">
        <p>Biztosan törölni szeretnéd ezt a feladatot?</p>
        <div className="flex justify-end gap-2 mt-4">
          <button
            onClick={() => deleteTask(modalTaskId)}
            className="bg-red-500 text-white px-4 py-1 rounded"
          >
            Igen
          </button>
          <button
            onClick={() => setModalTaskId(null)}
            className="bg-gray-300 px-4 py-1 rounded"
          >
            Mégsem
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;