import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home";
import Header from "./components/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import Footer from './components/Footer';
import About from './components/About'
import "./App.css";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

// /* Basic CSS for apps built with Ionic */
// import "@ionic/react/css/normalize.css";
// import "@ionic/react/css/structure.css";
// import "@ionic/react/css/typography.css";

// /* Optional CSS utils that can be commented out */
// import "@ionic/react/css/padding.css";
// import "@ionic/react/css/float-elements.css";
// import "@ionic/react/css/text-alignment.css";
// import "@ionic/react/css/text-transformation.css";
// import "@ionic/react/css/flex-utils.css";
// import "@ionic/react/css/display.css";

// /* Theme variables */
// import "./theme/variables.css";

interface todo {
  _id: string;
  text: string;
  reminder: Boolean;
  day: string;
}

interface mytodo {
  text: string;
  reminder: Boolean;
  day: string;
}

const App: React.FC = () => {
  const [showAddTask, setShowAddTask] = useState<any>(false);
  const [todos, setTodos] = useState<todo[]>([]);

  useEffect(() => {
    const getTodos = async () => {
      const TodosFromServer = await fetchTodos();
      setTodos(TodosFromServer);
    };

    getTodos();
  }, []);

  // Fetch Tasks
  const fetchTodos = async () => {
    const res = await fetch("/api/todo");
    const data = await res.json();
    return data;
  };

  // Fetch Task
  const fetchTodo = async (id: string) => {
    const res = await fetch(`/api/todo/${id}`);
    const data = await res.json();

    return data;
  };

  // Add Task
  const addTodo = async (todo: mytodo) => {
    const res = await fetch("/api/todo", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(todo),
    });

    const data = await res.json();
    console.log("nnn");

    setTodos([...todos, data]);
  };

  // Delete Task
  const deleteTodo = async (id: string) => {
    await fetch(`/api/todo/${id}`, {
      method: "DELETE",
    });

    setTodos(todos.filter((todo: todo) => todo._id !== id));
  };

  // Toggle Reminder
  const toggleReminder = async (id: string) => {
    const taskToToggle = await fetchTodo(id);
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

    const res = await fetch(`/api/todo/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updTask),
    });

    const data = await res.json();

    setTodos(
      todos.map((todo) =>
        todo._id === id ? { ...todo, reminder: data.reminder } : todo
      )
    );
  };

  const showTask = () => {
    setShowAddTask(!showAddTask);
  };

  return (
    // <div className="container">
    //   <Header title={" My Todo List"} onShowTask={showTask} />

    //   {showAddTask && <AddTodo onAdd={addTodo} />}
    //   <Todos todos={todos} onDelete={deleteTodo} onToggle={toggleReminder} />
    // </div>

    <Router>
    <div className='container'>
      <Header
       title={" My Todo List"}
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      <Route
        path='/'
        exact
        render={(props) => (
          <>
            {showAddTask && <AddTodo onAdd={addTodo} />}
            {todos.length > 0 ? (
              <Todos
                todos={todos}
                onDelete={deleteTodo}
                onToggle={toggleReminder}
              />
            ) : (
              'Nothing To do today'
            )}
          </>
        )}
      />
      <Route path='/about' component={About} />
      <Footer />
    </div>
  </Router>
  );
};

export default App;
