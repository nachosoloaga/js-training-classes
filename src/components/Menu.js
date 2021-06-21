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
            <li>
              <Link
                className="menu-list-item"
                to={`classes/${classNumber}`}
              >{`📖 Clase ${classNumber}`}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Menu;
