import React from "react";
//import "./styles.css";
let adresse = "Chmati Gabès";
const MyAdresse = () => {
  return (
    <h2
      style={{
        boxShadow: "0 5px 8px #000",
        textOrientation: "sideways-right",
        textAlign: "right",
        textDecorationColor: "Highlight",
      }}
    >
      J'habite à {adresse}
    </h2>
  );
};
export default MyAdresse;
