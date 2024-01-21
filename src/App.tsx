import "./App.css";
import TodoListComponent from "./components/todoList";

function App() {
  return (
    <div className="bg-blue-400 h-screen w-screen">
      <div className="h-screen flex items-center justify-center">
        <TodoListComponent />
      </div>
    </div>
  );
}

export default App;
