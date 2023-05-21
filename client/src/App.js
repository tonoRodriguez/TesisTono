import { useState } from "react";
import "./App.css";
import InputText from "./components/InputText";
const App = ()=> {


  return (

    <div className="screen">
      <div className="subscreenRight">
        <h1>Insertar Nodo</h1>
        <InputText/>

      </div>
      <div className="subscreenLeft">
        <h1>Nodo Optimizado</h1>
        <h2>Boton de optimizar</h2>
      </div>
    </div>
  );
}
export default App;


