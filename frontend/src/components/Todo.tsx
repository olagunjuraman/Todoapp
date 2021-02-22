import { FaTimes } from "react-icons/fa";

interface TodoProps {
  key: any;
  todo: todo;
  onDelete: (id: string) => void;
  onToggle: (id: string) => void;
}

interface todo {
  _id: string;
  text: string;
  reminder: Boolean;
  day: String
}

const Todo: React.FC<TodoProps> = ({ todo, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${todo.reminder ? "reminder" : ""}`}
      onDoubleClick={() => 
        onToggle(todo._id)
      }
    >
      <h3>
        {todo.text}{" "}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(todo._id)}
        />
      </h3>
      <p>{todo.day}</p>
    </div>
  );
};

export default Todo;
