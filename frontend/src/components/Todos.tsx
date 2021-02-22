import Task from "./Todo";

interface TodosProps {
  todos: todo[];
  onDelete: (id: string) => void;
  onToggle: (id: string) => void;

  // onDelete(id: number): () => void;
  // onToggle(id: number): () => void;
}

interface todo {
  _id: string;
  text: string;
  reminder: Boolean;
  day: string;
}

const Todos: React.FC<TodosProps> = ({ todos, onDelete, onToggle }) => {
  return (
    <>
      {todos.map((todo: todo) => {

        return <Task
          key={todo._id}
          todo={todo}
          onDelete={onDelete}
          onToggle={onToggle}
        />;
      })}
    </>
  );
};

export default Todos;
