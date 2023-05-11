import React from "react";
import { Link } from "react-router-dom";
//import Image from "../img/about.jpg";
import Image from "../images/main_header.png";
const Header = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          {" "}
          <h4>#2Mois_Pour_Devenir_Ingenieur</h4>
          <h1> Réjoignez l'_Ekip des Légendes du Développement</h1>
          <p>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing
          </p>
          <Link to="plans" className="btn lg">
            Commençons
          </Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={Image} alt="_Ekip Header" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
