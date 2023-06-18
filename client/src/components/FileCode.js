import { useState } from "react";
import InputText from "./InputText";
import OutputText from "./OutputText";
import "./FileCode.css";
const FileCode = ()=> {

  const [texto,setTexto] = useState([]);
  var content =""
  
  if (Object.keys(texto).length > 0) {
    content = Object.entries(JSON.parse(texto)[1]).map(([key, value]) => (
      <li key={key}>
        {key}: {value},{' '}
      </li>
    ));
  }

  return (

    <div className="screen">
      <div className="subscreenLeft">
        <h1>Maquina FSM</h1>
        <InputText 
        setTexto = {setTexto}
        texto = {texto}
        />
        <h3>Functions</h3>
        <p>{content}</p>

      </div>
      <div className="subscreenRight">
        <h1>Nodo Optimizado</h1>
        <OutputText texto = {texto}/>

      </div>
    </div>
  );
}
export default FileCode;