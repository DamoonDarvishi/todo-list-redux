import './App.css';
import AddTodos from './conponents/AddTodos';
import TodoList from './conponents/TodoList';
import TotalTodos from './conponents/TotalTodos';

function App() {
  return (
    <div className="App">
      <h1>My todo list</h1>
      <AddTodos />
      <TodoList />
      <TotalTodos />
    </div>
  );
}

export default App;
