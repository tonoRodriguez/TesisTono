import { useState } from "react";
import EnterNode from "./EnterNode";
import OutputText from "./OutputText";
const ManualInput = ()=> {
  const [texto,setTexto]=useState([{},{}]);
    return (
      <div className="screen">
        <div className="subscreenLeft">
          <EnterNode setTexto={setTexto} texto={texto}/>
        </div>
          <div className="subscreenRight">
            <h1>Nodo Optimizado</h1>
            <OutputText texto = {texto}/>

          </div>

        </div>
    );
  }
  export default ManualInput;