import { useStore, actions } from "./store";
import logger from "./store/logger";

function App() {
  const [state, dispatch] = useStore();
  const { todos, todoInput } = state;
  const handleAdd = () => {
    dispatch(actions.addTodo(todoInput)); // Dispatch the action with the todoInput value
  };

  return (
    <div className="App">
      <input
        value={todoInput}
        placeholder="Enter todo...."
        onChange={(e) => {
          dispatch(actions.setTodoInput(e.target.value));
        }}
      />
      <button onClick={handleAdd}> Add</button>
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </div>
  );
}

export default App;
