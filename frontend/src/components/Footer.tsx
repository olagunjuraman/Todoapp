import { IonFooter } from "@ionic/react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <IonFooter>
      <p>Copyright &copy; 2021</p>
      <Link to="/about">About</Link>
    </IonFooter>
  );
};

export default Footer;
