import { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonItemDivider,
  IonCheckbox,
} from "@ionic/react";

interface AddTodoProps {
  onAdd: (todo: mytodo) => any;
}

interface mytodo {
  text: string;
  reminder: Boolean;
  day: string;
}

const AddTodo: React.FC<AddTodoProps> = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState<any>(false);

  const onSubmit = (event: any) => {
    event.preventDefault();

    if (!text) {
      alert("Please add a task");
      return;
    }
    if (!day) {
      alert("Please add a date");
      return;
    }

    onAdd({
      text,
      day,
      reminder,
    });

    setText("");
    setDay("");
    setReminder(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form-control">
        <IonLabel>Task</IonLabel>
        <IonInput
          type="text"
          placeholder="Add Task"
          value={text}
          onIonChange={(e) => setText(e.detail.value!)}
        />
      </div>

      <div className="form-control">
        <IonLabel>Day & Time</IonLabel>
        <IonInput
          type="text"
          placeholder="Add Day & time"
          value={day}
          onIonChange={(e) => setDay(e.detail.value!)}
        />
      </div>

      <div className="form-control form-control-check">
        <IonLabel>Set Reminder</IonLabel>
        <IonCheckbox
          value={reminder}
          checked={reminder}
          onIonChange={(e) => setReminder(e.detail.checked)}
        />
      </div>

      <input type="submit" value=" Add Todo" className="btn btn-block" />
    </form>
  );
};

export default AddTodo;
