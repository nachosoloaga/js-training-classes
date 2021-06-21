import React from "react";
import { Link } from "react-router-dom";

const selectionPageStyles = {
  minHeight: "50vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",
};

const Menu = () => {
  return (
    <div style={selectionPageStyles}>
      <h1>Which class do you want to present?</h1>
      <Link to="classes/1">Clase 1</Link>
      <Link to="classes/2">Clase 2</Link>
    </div>
  );
};

export default Menu;
