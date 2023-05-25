import { useState } from "react";
import "./App.css";
import InputText from "./components/InputText";
import OutputText from "./components/OutputText";
const App = ()=> {

  const [texto,setTexto] = useState([]);

  return (

    <div className="screen">
      <div className="subscreenRight">
        <h1>Insertar Nodo</h1>
        <InputText 
        setTexto = {setTexto}
        texto = {texto}
        />

      </div>
      <div className="subscreenLeft">
        <h1>Nodo Optimizado</h1>
        <h2>Boton de optimizar</h2>
        <OutputText texto = {texto}/>

      </div>
    </div>
  );
}
export default App;


