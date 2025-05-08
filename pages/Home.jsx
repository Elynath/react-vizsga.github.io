import TaskList from "../components/TaskList";
import { useTasks } from "../context/TaskContext";

function Home() {
    return (
      <div className="container">
        <h1>Feladataim</h1>
        <TaskList />
      </div>
    );
  }

export default Home;