import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

//ce fichier index.js va retourner (render) la fonction App du fichier App.js au fichier index.html
// ce retour ce fait dans la fonction(objet) root qui est envoyé au fichier index.html
// cette opération est dite alors injection   qui se fait une seule fois pour chaque nouveau projet web
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
