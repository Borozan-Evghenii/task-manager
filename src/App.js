import TodoApp from "./pages/TodoApp";
import {tasksApi} from "./redux/tasksApi";

function App() {
    console.log(tasksApi)
  return (
    <div className="container">
      <TodoApp />
    </div>
  );
}

export default App;
