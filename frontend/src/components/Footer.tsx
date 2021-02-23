import { IonFooter, IonToolbar } from "@ionic/react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <IonFooter>
      <IonToolbar>
        <p>Copyright &copy; 2021</p>
        <Link to="/about">About</Link>
      </IonToolbar>
    </IonFooter>
  );
};

export default Footer;
