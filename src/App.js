import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import "./codes_css/code1.css";
import NavScrollExample from "./codes_js/navbars/Navbar1.js"; //  importer le navbar du fichier navbar1.js
import BasicExample from "./codes_js/forms/form1.js"; //importer le formulaire du fichier form1.js
import MyProfilePhoto from "./component/profile/ProfilePhoto"; //importer le composant qui rend le photo
import MyFullName from "./component/profile/FullName"; //importer le composant qui rend le nom et le prenom
import MyAdresse from "./component/profile/Address.js"; //importer le composant qui rend l"adresse
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Bienvenue Helali Miloud</p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        <NavScrollExample />
      </div>
      <div>
        <BasicExample />
      </div>

      <div>
        <MyFullName />
      </div>
      <div>
        <MyProfilePhoto />
      </div>
      <div>
        <MyAdresse />
      </div>
    </div>
  );
}
//cette ligne et de faire retourner ou exporter le rendu de cette fonction
export default App;

/*   le code initial du fichier App.js

{
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>Bienvenue Helali Miloud</p>
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  </header>
} */
