import { IonButton } from "@ionic/react";
interface ButtonProps {
  onClick: () => void;
  color: string;
  text: string;
}

const Button: React.FC<ButtonProps> = ({ color, text, onClick }) => {
  return (
    <IonButton
      className="btn"
      onClick={onClick}
      style={{ backgroundColor: color }}
    >
      {" "}
      {text}
    </IonButton>
  );
};

export default Button;
