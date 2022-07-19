import React from "react";
import "./styles.css";
let nom = "Helali";
let prenom = "Miloud";
const MyFullName = () => {
  return (
    <h1 className="NP">
      Je suis {nom} {prenom}
    </h1>
  );
};
export default MyFullName;
