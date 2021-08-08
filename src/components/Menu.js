import React from "react";
import { Link } from "react-router-dom";
import classes from "../constants/classes";

const Menu = () => {
  return (
    <div className="menu">
      <h1 className="menu-header">👋 JS Training Classes 🚀</h1>
      <ul className="menu-list">
        {classes.map(({ classNumber }) => {
          return (
            <li key={classNumber}>
              <Link
                className="menu-list-item"
                to={`classes/${classNumber}`}
              >{`📖 Clase ${classNumber}`}</Link>
            </li>
          );
        })}
        <li className="menu-list-item">📖 Clase 3</li>
        <li className="menu-list-item">📖 Clase 4</li>
        <li className="menu-list-item" style={{color:"gray"}}>📖 Clase 5</li>
      </ul>
    </div>
  );
};

export default Menu;
