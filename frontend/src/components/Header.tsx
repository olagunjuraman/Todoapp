import PropTypes from "prop-types";
import Button from "./Button";
import { useLocation } from 'react-router-dom'
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

interface HeaderProps{
    showAdd: any,
    onAdd: ()=> any,
    title: string
}
const Header: React.FC<HeaderProps> = ({ title, showAdd, onAdd }) => {
  const location = useLocation()

  // const onClick = () => {
  //   onShowTask();
  // };

  return (
    <IonHeader className="header">
      <IonToolbar>
        <IonTitle>{title}</IonTitle>
      </IonToolbar>
      <Button
          color={showAdd ? 'red' : 'green'}
          text={showAdd ? 'Close' : 'Add'}
          onClick={onAdd}
        />
    </IonHeader>
  );
};

Header.defaultProps = {
  title: "Todo Tracker",
};



export default Header;
