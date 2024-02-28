import ToDoItems from "../ToDoItems/ToDoItems";
import "./ToDoList.css";
const ToDoList = () => {
  const todos = [
    "Buy Groceries",
    "Send Email",
    "Finish Assignment",
    "Write Blog",
    "Bake Cake",
  ];
  return (
    <div>
      <h1>My Todo's</h1>
      <ul>
        {todos.map((items, index) => (
          <ToDoItems item={items} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
