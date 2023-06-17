import { useState } from "react";
import InputText from "./InputText";
import OutputText from "./OutputText";
import "./FileCode.css";
const FileCode = ()=> {

  const [texto,setTexto] = useState([]);

  return (

    <div className="screen">
      <div className="subscreenRight">
        <h1>Maquina FSM</h1>
        <InputText 
        setTexto = {setTexto}
        texto = {texto}
        />

      </div>
      <div className="subscreenLeft">
        <h1>Nodo Optimizado</h1>
        <OutputText texto = {texto}/>

      </div>
    </div>
  );
}
export default FileCode;